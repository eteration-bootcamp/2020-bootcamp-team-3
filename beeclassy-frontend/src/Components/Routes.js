import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Main from '../App';
import AboutUs from '../Components/AboutUs';
import NotFound from '../Components/';
import Cart from "../Components/Cart";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/about" component={AboutUs} />
          <Route exact path="/" component={Main}/>
          <Route path="/cart" component={Cart} />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;