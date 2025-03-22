import React, { useState } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL 

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login Successful");
      window.location.href = "/";
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "0 20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          padding: "30px 40px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
            color: "#333",
            fontSize: "28px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Login
        </h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "14px",
            margin: "12px 0",
            borderRadius: "8px",
            border: "2px solid #ddd",
            fontSize: "16px",
            outline: "none",
            transition: "0.3s ease",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "14px",
            margin: "12px 0",
            borderRadius: "8px",
            border: "2px solid #ddd",
            fontSize: "16px",
            outline: "none",
            transition: "0.3s ease",
            boxSizing: "border-box",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "600",
            transition: "0.3s ease",
            boxSizing: "border-box",
          }}
          onMouseOver={(e) => (e.target.style.background = "#5a7bfa")}
          onMouseOut={(e) => (e.target.style.background = "#6e8efb")}
        >
          Login
        </button>

      </form>
    </div>
  );
};

export default Login;
