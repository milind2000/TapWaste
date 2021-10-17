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
      <div className={classes.cardtitle}>
        {userData.name.first} {userData.name.last}
      </div>
      <div className={classes.cardbody}>
        <div className={classes.location}>
          <p>Address : {userData.address}</p>
          <p>Pincode : {userData.pincode}</p>
        </div>
        <div className={classes.phoneNumber}>
          <p>Mobile No. : {userData.phone}</p>
        </div>
        <p>Estimate Amount : {userData.estimateAmount}</p>
        <Button variant={color} onClick={lockButtonClicked}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default SocialCard;
