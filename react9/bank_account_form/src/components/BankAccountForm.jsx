import React, { useState } from "react";
import "./BankAccountForm.css";

const BankAccountForm = () => {
  const [formData, setFormData] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
    accountType: "",
  });

  const [errors, setErrors] = useState({});
  const [accounts, setAccounts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.accountName.trim()) {
      newErrors.accountName = "Account name is required";
    } else if (formData.accountName.length < 3) {
      newErrors.accountName = "Account name must be at least 3 characters";
    }

    if (!formData.accountNumber.trim()) {
      newErrors.accountNumber = "Account number is required";
    } else if (!/^\d{10}$/.test(formData.accountNumber)) {
      newErrors.accountNumber = "Account number must be exactly 10 digits";
    }

    if (!formData.bankName) {
      newErrors.bankName = "Bank name is required";
    }

    if (!formData.accountType) {
      newErrors.accountType = "Account type is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setAccounts([...accounts, formData]);
      setFormData({
        accountName: "",
        accountNumber: "",
        bankName: "",
        accountType: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="bank-container">
      <h2>Add Bank Account</h2>
      <form onSubmit={handleSubmit} className="bank-form">
        <div className="form-group">
          <label>Account Name:</label>
          <input
            type="text"
            name="accountName"
            value={formData.accountName}
            onChange={handleChange}
            placeholder="Enter account name"
          />
          {errors.accountName && (
            <p className="error">{errors.accountName}</p>
          )}
        </div>

        <div className="form-group">
          <label>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            placeholder="10-digit account number"
          />
          {errors.accountNumber && (
            <p className="error">{errors.accountNumber}</p>
          )}
        </div>

        <div className="form-group">
          <label>Bank Name:</label>
          <select
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
          >
            <option value="">Select Bank</option>
            <option value="GTBank">GTBank</option>
            <option value="Access Bank">Access Bank</option>
            <option value="UBA">UBA</option>
            <option value="First Bank">First Bank</option>
            <option value="Zenith Bank">Zenith Bank</option>
          </select>
          {errors.bankName && <p className="error">{errors.bankName}</p>}
        </div>

        <div className="form-group">
          <label>Account Type:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="accountType"
                value="Savings"
                checked={formData.accountType === "Savings"}
                onChange={handleChange}
              />
              Savings
            </label>
            <label>
              <input
                type="radio"
                name="accountType"
                value="Current"
                checked={formData.accountType === "Current"}
                onChange={handleChange}
              />
              Current
            </label>
          </div>
          {errors.accountType && (
            <p className="error">{errors.accountType}</p>
          )}
        </div>

        <button type="submit">Save Account Details</button>
      </form>

      {accounts.length > 0 && (
        <div className="accounts-list">
          <h3>Saved Accounts</h3>
          {accounts.map((acc, index) => (
            <div key={index} className="account-card">
              <p>
                <strong>Name:</strong> {acc.accountName}
              </p>
              <p>
                <strong>Number:</strong> {acc.accountNumber}
              </p>
              <p>
                <strong>Bank:</strong> {acc.bankName}
              </p>
              <p>
                <strong>Type:</strong> {acc.accountType}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BankAccountForm;
