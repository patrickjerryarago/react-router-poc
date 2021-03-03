import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import About from "./About/About";
import Contact from "./Contacts/Contact";
import Profile from "./Profile/Profiles";
import Home from "./Home/Home";

const Routes = () => {
        return (
            <Router>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Profiles" component={Profile} />
            </Router>
        )
    }

export default Routes;