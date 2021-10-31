import React, { useState } from "react";
import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";
//import { UserContext } from "../App";

const LoginVendorPage = () => {
  //const { state, dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    const send = JSON.stringify({ email: email, password: password });
    console.log(send);
    const response = await fetch("http://localhost:5000/posts/vendor/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: send,
    });

    if (response.status === 200) {
      const res = await response.json();
      sessionStorage.setItem("btoken", res.accessToken);
      sessionStorage.setItem("usertype", "VENDOR");
      console.log("Login Vendor Successfull");
      history.push("/");
      window.location.reload(false);
    } else {
      console.log(response);
      alert("Email or Password wrong!!");
    }
  }

  return (
    <div className={classes.body1}>
      <div className={classes.contactForm}>
        <h2>Login(FOR VENDORS)</h2>
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
            <a href="/registervendor" style={{ color: "yellow" }}>
              New Vendor to Tap Waste? Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginVendorPage;
