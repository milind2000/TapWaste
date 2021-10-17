import React, { useState } from "react";
import classes from "./Login.module.css";
// import { Redirect } from "react-router-dom";
import { browserHistory } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const send = JSON.stringify({ email: email, password: password });
    console.log(send);
    const response = await fetch("http://localhost:5000/posts/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: send,
    });
    if (response.status === 200) {
      console.log("Login Successfull");
      //   return <Redirect to="/" />;
      browserHistory.push("/");
    } else {
      console.log(response);
      alert("Email or Password wrong!!");
    }
  }

  return (
    <div className={classes.body1}>
      <div className={classes.contactForm}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <p>Username</p>
          <input
            type="text"
            name=""
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            name=""
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            <input type="checkbox" />{" "}
            <span className={classes.checkboxText}>Remember Me</span>
          </p>
          <input type="submit" name="" value="Sign In" />
        </form>
        <div>
          <p>
            {" "}
            <a href="/register" style={{ color: "yellow" }}>
              New user to Tap Waste? Sign up here
            </a>
          </p>
          <p>
            {" "}
            <a href="/loginvendor" style={{ color: "yellow" }}>
              login/signup for vendors
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
