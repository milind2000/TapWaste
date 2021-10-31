import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//import { initialState, reducer } from "../src/reducer/UseReducer";
import NavigationBar from "./components/NavigationBar";

//pages
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import AboutPage from "./Pages/About";
import CartPage from "./Pages/Cart";
import NoMatchPage from "./Pages/404";
import RegisterVendorPage from "./Pages/RegisterVendor";
import LoginVendorPage from "./Pages/LoginVendor";
import OrdersPage from "./Pages/Orders";
//export const UserContext = createContext();

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/loginvendor" component={LoginVendorPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/registervendor" component={RegisterVendorPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/orders" component={OrdersPage} />
        <Route path="/404" component={NoMatchPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

function App() {
  //const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <NavigationBar />
      <Routing />
    </>
  );
}

export default App;
