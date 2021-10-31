import React, { useState } from "react";
import { useHistory } from "react-router";
import classes from "./Register.module.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [add, setAdd] = useState("");
  const [zone, setZone] = useState(0);
  const [mobile, setMobile] = useState(0);
  const [pin, setPin] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  async function handleSubmit(event) {
    event.preventDefault();
    const send = JSON.stringify({
      name: name,
      address: add,
      phone: mobile,
      pincode: pin,
      zone: zone,
      email: email,
      password: password,
    });
    //console.log(send);

    const response = await fetch("http://localhost:5000/posts/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: send,
    });
    if (response.status === 200) {
      //console.log("Registered Successfull");
      history.push("/login");
    } else if (response.status === 401) {
      alert("User Already exists");
    } else {
      //console.log(response);
      alert("Wrong Credentials!!");
    }
  }

  return (
    <div className={classes.body1}>
      <div className={classes.contactForm}>
        <h2>REGISTER</h2>
        <form onSubmit={handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            name=""
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <p>Email</p>
          <input
            type="email"
            name=""
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Address</p>
          <input
            type="text"
            name=""
            placeholder="Enter your address"
            onChange={(e) => setAdd(e.target.value)}
          />
          <p>Zone</p>
          <input
            type="number"
            name=""
            placeholder="Enter your zone number"
            onChange={(e) => setZone(e.target.value)}
          />
          <p>Mobile Number</p>
          <input
            type="tel"
            name=""
            placeholder="Enter your mobile number"
            onChange={(e) => setMobile(e.target.value)}
          />
          <p>Pincode</p>
          <input
            type="text"
            name=""
            placeholder="Enter your pincode"
            onChange={(e) => setPin(e.target.value)}
          />
          {/* <p> City</p>
                        <select id="cars" name="city">
                             <option value="volvo">Indore</option>
                         </select> */}
          <p>Password</p>
          <input
            type="password"
            name=""
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p> Confirm Password</p>
          <input type="password" name="" placeholder="Enter Password" />
          <input type="submit" name="" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
