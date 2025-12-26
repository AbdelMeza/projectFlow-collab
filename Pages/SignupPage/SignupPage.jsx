import "./signupPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authentificationManagement from "../../Store/authentificationManagement";

export default function SignupPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { validateSignup } = authentificationManagement()

  const handlChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  const handleSubmit = async () => {
    const values = {
      username: username,
      email: email,
      password: password
    }

    try {
      const isValid = await validateSignup(values)

      if (isValid) {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

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
        <p>
          Already have an account? <span style={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => navigate('/login')}>Login</span>
        </p>
        <button type="submit" onClick={() => handleSubmit()}>Signup</button>
      </div>
    </div>
  );
}
