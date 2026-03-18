import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/account");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create your PopX account</h2>

        <label>Full Name*</label>
        <input
          type="text"
          name="name"
          placeholder="Enter full name"
          value={form.name}
          onChange={handleChange}
        />

        <label>Phone number*</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter phone number"
          value={form.phone}
          onChange={handleChange}
        />

        <label>Email address*</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={handleChange}
        />

        <label>Password*</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />

        <label>Company name</label>
        <input
          type="text"
          name="company"
          placeholder="Enter company name"
          value={form.company}
          onChange={handleChange}
        />

        <label>Are you an Agency?*</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={form.isAgency === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={form.isAgency === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <button className="register-btn" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Register;