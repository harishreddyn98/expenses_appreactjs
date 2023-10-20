import React, { useState, Fragment } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Expenses from "./Expenses"; // Import the Expenses component

export default function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password: pass,
    };
    setUsers([...users, newUser]);
    setIsRegistered(false);
    setName("");
    setEmail("");
    setPass("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === pass
    );
    if (user) {
      console.log("Login successful!");
      setLoginError(false);
      setIsAuthenticated(true);
    } else {
      console.error("Login failed");
      setLoginError(true);
    }
    setEmail("");
    setPass("");
  };

  const toggleForm = () => {
    setIsRegistered(!isRegistered);
    if (!isRegistered) {
      setEmail("");
      setPass("");
    }
  };

  // Render the Expenses component when isAuthenticated is true
  return (
    <div className="App">
      <div className="auth-form-container">
        {isAuthenticated ? (
          <Expenses /> // Render the Expenses component
        ) : (
          <>
            <h2>{isRegistered ? "Register" : "Login"}</h2>
            {isRegistered ? (
              <Register
                name={name}
                email={email}
                pass={pass}
                handleRegister={handleRegister}
                setName={setName}
                setEmail={setEmail}
                setPass={setPass}
                toggleForm={toggleForm}
              />
            ) : (
              <Login
                email={email}
                pass={pass}
                handleLogin={handleLogin}
                setEmail={setEmail}
                setPass={setPass}
                toggleForm={toggleForm}
              />
            )}
            {loginError && <p>Login failed. Please check your credentials.</p>}
          </>
        )}
      </div>
    </div>
  );
}
