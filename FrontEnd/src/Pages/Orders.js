import React from "react";
import { useState, useEffect } from "react";
import Ordercard from "../components/OrderCard";
import classes from "./Orders.module.css";

function OrdersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://localhost:5000/posts/orders");
        userData = await response.json();
        console.log(userData);
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setUsers(userData);
    })();
  }, []);

  return (
    <div className={classes.App}>
      <h1>Orders from your zone</h1>
      <div className={classes.cardscontainer}>
        {users.map((user, index) => (
          <Ordercard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;
