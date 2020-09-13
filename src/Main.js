import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Events from "./Events";

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <h1>Draft GCC Single-Page Website</h1>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/aboutus">About Us</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
            </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/aboutus" component={AboutUs}/>
                    <Route path="/events" component={Events}/>
                    </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;