import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmmit = (e) => {
    e.preventDefault();

    if (!name && name.length <= 3) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }

    if (name && email && password) {
      axios
        .post("http://localhost:3001/register", { name, email, password })
        .then((result) => {
          console.log(result);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              id="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <div style={{ color: "red" }}>{nameError}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              id="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div style={{ color: "red" }}>{emailError}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              id="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <div style={{ color: "red" }}>{passwordError}</div>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p>Already have an Account</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
      <div>
        <img src="../src/preview.jpg" height={500} alt="" />
      </div>
    </div>
  );
}

export default Signup;
