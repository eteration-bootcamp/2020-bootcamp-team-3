import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import Main from '../App'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Main} />

                </Switch>
            </Router>
        )
    }
}