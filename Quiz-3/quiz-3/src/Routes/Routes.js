import React from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import MobileForm from "../components/MobileForm";
import MobileList from "../components/MobileList";
import { MobileProvider } from "../context/mobileContext";
import Layout from "../quiz-3-layout/layoutQuiz";

const Routes = () => {

  return (
    <Router>
      <Layout/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/mobile-list">
          <MobileProvider>
             <MobileList />
          </MobileProvider>
          
        </Route>

        <Route exact path="/mobile-form">
          <MobileProvider>
          <MobileForm />
          </MobileProvider>
        </Route>

        <Route exact path="/mobile-form/edit/:slug">
        <MobileProvider>
          <MobileForm />
          </MobileProvider>
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/search/:valueOfSearch">
          {/* <Dashboard /> */}
        </Route>

      </Switch>
    </Router>
  );
};

export default Routes;