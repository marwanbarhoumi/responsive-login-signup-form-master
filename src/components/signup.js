import React from "react";
import "./loginform.css";
import { Link } from "react-router-dom";

const SignForm = () => {
  return (
    <div className="cover">
      <h1>Signup</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <input type="text" placeholder="numero telephone" />
      <input type="date" placeholder="date de naissance" />
      
      <div className="login-btn">Signup</div>
      <Link to="/">Login Page</Link>
      </div>
  );
};

export default SignForm;
