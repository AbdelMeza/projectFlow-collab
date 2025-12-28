import React from "react";
import { useState } from "react";
import "./loginPage.css";
import { useNavigate } from "react-router-dom";
import authentificationManagement from "../../Store/authentificationManagement";

export default function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { validateLogin } = authentificationManagement()
    console.log(email, password);
    const handlChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const handleSubmit = async () => {
        const values = {
            identifier: email.trim(),
            password: password.trim()
        }
        const isValid = await validateLogin(values)

        if (isValid) {
            navigate('/')
        }
    }

    return (
        <div className="login-page">
            <h1>Login Page</h1>
            <div className="login-container">
                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={handlChange}
                        value={email}
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
                        value={password}
                    />
                </div>

                <p>
                    Don't have an account? <span style={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => navigate('/signup')}>Sign up</span>
                </p>
                <button type="submit" onClick={() => handleSubmit()}>Login</button>
            </div>
        </div>
    );
}
