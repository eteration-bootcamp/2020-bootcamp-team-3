import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Main from './App';
import AboutUs from "./Components/AboutUs"
import Login from "./Components/login.component"
import Register from './Components/register.component'
import CartScreen from "./Components/CartScreen"


const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/AboutUs" component={AboutUs}/>
          <Route path="/cart/:id" component={CartScreen}/>
          <Route exact path="/" component={Main}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> 
          <Route path="/cart" component={CartScreen} /> 
        </Switch>
    </Router>
  );
}

export default Routes;