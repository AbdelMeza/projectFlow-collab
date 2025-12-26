import React from "react";
import "./signupPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  console.log(username, email, password, role);
  const navigate = useNavigate()
  const handlChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "role") {
      setRole(value);
    }
  };

  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <div className="signup-container">
        <div className="username">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={handlChange}
          />
        </div>
        <br />
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handlChange}
          />
        </div>
        <br />
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handlChange}
          />
        </div>
        <br />
        <div className="role">
          <label htmlFor="role">Role:</label>
          <select id="role" name="role" required onChange={handlChange}>
            <option value="user">Client</option>
            <option value="admin">Freelancer</option>
          </select>
        </div>
        <button type="submit">Signup</button>
        <p>
          Already have an account? <span onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  );
}
