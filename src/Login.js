import React from "react";

export default function Login({
  email,
  pass,
  handleLogin,
  setEmail,
  setPass,
  toggleForm,
}) {
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="youremail@gmail.com"
        id="email"
        name="email"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="********"
        id="password"
        name="password"
      />
      <button type="submit">Log In</button>
      <button className="link-btn" onClick={toggleForm}>
        Don't have an account? Register here
      </button>
    </form>
  );
}
