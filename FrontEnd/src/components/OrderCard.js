import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./OrderCard.module.css";

const SocialCard = ({ userData }) => {
  const [color, setColor] = useState("primary");
  const [buttonText, setbuttonText] = useState("Available");

  function lockButtonClicked() {
    console.log("Clicked");

    setColor("success");
    setbuttonText("Acquired");
  }

  return (
    <div className={classes.card}>
      <div className={classes.cardtitle}>
        {userData.owner.name.toUpperCase()}
      </div>
      <div className={classes.cardbody}>
        <div className={classes.location}>
          <p>Address : {userData.owner.address.toUpperCase()}</p>
          <p>Pincode : {userData.owner.pincode}</p>
        </div>
        <div className={classes.phoneNumber}>
          <p>Mobile No. : {userData.owner.phone}</p>
        </div>
        <p>Estimate Amount : Rs. {userData.amount}</p>
        <Button variant={color} onClick={lockButtonClicked}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default SocialCard;
