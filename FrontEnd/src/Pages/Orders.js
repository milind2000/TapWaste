import React from 'react';
import { useState, useEffect } from "react";
import Ordercard from '../components/OrderCard';
import classes from './Orders.module.css';

function OrdersPage () {
	
	const [users, setUsers] = useState([]);

	useEffect(() => {
		(async () => {
		  let userData;
		  try {
			const response = await fetch("https://randomuser.me/api/?results=10");
			userData = await response.json();
		  } catch (error) {
			console.log(error);
			userData = [];
		  }
		  setUsers(userData.results);
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