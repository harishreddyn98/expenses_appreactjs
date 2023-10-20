import React from "react";

export default function Register({
  name,
  email,
  pass,
  handleRegister,
  setName,
  setPass,
  setEmail,
  toggleForm,
}) {
  return (
    <form className="register-form" onSubmit={handleRegister}>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
        placeholder="Name"
      />
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
      <button type="submit">Register</button>
      <button className="link-btn" onClick={toggleForm}>
        Already have an account? Log in here
      </button>
    </form>
  );
}
