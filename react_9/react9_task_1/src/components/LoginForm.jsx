import React, { useState, useEffect } from "react";
import "./LoginForm.css"; // external CSS file

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [isFormInvalid, setIsFormInvalid] = useState(true); // 👈 now using useState

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // ✅ Automatically check validity whenever inputs change
  useEffect(() => {
    const hasErrors =
      !email.trim() ||
      !password.trim() ||
      !validateEmail(email) ||
      password.length < 8;

    setIsFormInvalid(hasErrors);
  }, [email, password]);

  const validateForm = () => {
    let tempErrors = {};

    if (!email.trim()) tempErrors.email = "Email is required";
    else if (!validateEmail(email)) tempErrors.email = "Invalid email format";

    if (!password) tempErrors.password = "Password is required";
    else if (password.length < 8)
      tempErrors.password = "Password must be at least 8 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    if (validateForm()) {
      setSuccess("✅ Login successful!");
      setErrors({});
    }
  };

  return (
    <div className="login-container">
      <h2>🔐 Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {/* Email Field */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
          />
          {errors.email && <p className="error">❌ {errors.email}</p>}
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label>Password:</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p className="error">❌ {errors.password}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={isFormInvalid}>
          Login
        </button>

        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
