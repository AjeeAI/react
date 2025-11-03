
export default function StudentRegistration (){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        state: "",
        course: "",
        level: "100"
    })
    const [errors, setErrors] = useState({

    });
    const [submitted, setSubmitted] = useState(false);
    const nigerianStates = ["Lagos", "Abuja", "Kano", "Rivers", "Oyo", "Kaduna", "Ogun", "Edo", "Delta", "Anambra", "Imo", "Enugu"];

    function handleChange(e){
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (errors[name]){
            setErrors({...errors, [name]: ""});
        } 
    }
    function validate(){
        const newErrors = {};
        if (!formData.firstName.trim()){
            newErrors.firstName = "First name is required";
        } else if (formData.firstName.length < 2) {
            newErrors.firstName = "First name must be at least 2 characters";
        }

        if (!formData.lastName.trim()){
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email){
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)){
            newErrors.email = "Email is invalid";
        }

        if (!formData.phone){
            newErrors.phone = "Phone number is required";
        } else if (!/^0[7-9][0-1]\d{8}$/.test(formData.phone)){
            newErrors.phone = "Enter valid Nigerian phone number (e.g., 08012345678";
        }

        if (!formData.state){
            newErrors.state = "Please select your state";
        }
        if (!formData.course.trim()){
            newErrors.course = "Course of study is required";
        }
        return newErrors;
    }

    function handleSubmit(e){
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setSubmitted(true);
            console.log("Registration successful:", formData);

            setTimeout(()=> {
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    state: "",
                    course: "",
                    level: 100
                });
                setSubmitted(false);
            }, 3000);
        }

    }

    if (submitted){
        return (
            <div className="success-message">
                <h2>
                    Registration Successful!
                </h2>
                <p>
                    Welcome, {formData.firstName} {formData.lastName}
                </p>
                <p>We've sent a confirmation email to {formData.email}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Student Registration Form</h1>
            <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-section">
                <h3>Personal Information</h3>
                <div>
                    <div>
                        <label>First Name *</label>
                        <input 
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? "error": ""}/>

                        {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                    </div>

                    <div>
                        <label>Last Name *</label>
                        <input 
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? "error": ""}/>

                        {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                    </div>

                    <div>
                        <label>Email Address</label>
                        <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        className={errors.email ? "error": ""}
                        />
                    </div>

                    <div>
                        <label>
                            Phone Number *
                        </label>
                        <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="08012345678"
                        className={errors.phone ? "error": ""}
                        />
                    </div>

                    <div>
                        <label>State of Origin *</label>
                        <select name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={errors.state ? "error": ""}
                        >
                            <option value="">Select State</option>
                            {nigerianStates.map(()=> (
                                <option key={state} value={state}>{state}</option>
                            ))}
                            {errors.state && <span className="error-text">{errors.state}</span>}
                        </select>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}