import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./OrderCard.module.css";

const SocialCard = ({ userData }) => {
  const [color, setColor] = useState("primary");
  const [buttonText, setbuttonText] = useState("Available");

  function lockButtonClicked() {
    console.log("Clicked");
    //check if already locked else send data
    // if already locked, alert already locked
    setColor("success");
    setbuttonText("Acquired");
  }

  return (
    <div className={classes.card}>
      <div className={classes.cardtitle}>ID/Name of the User</div>
      <div className={classes.cardbody}>
        <div className={classes.location}>
          <p>Address : Address of the owner</p>
          <p>Pincode : 45XXXX</p>
        </div>
        <div className={classes.phoneNumber}>
          <p>Mobile No. : 9XXXXXXXXX</p>
        </div>
        <p>Estimate Amount : {userData.amount}</p>
        <Button variant={color} onClick={lockButtonClicked}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default SocialCard;
