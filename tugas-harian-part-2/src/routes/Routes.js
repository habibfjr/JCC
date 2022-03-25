import React from "react";
import Nav from "../components/Nav";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tugas10 from "../Tugas-10/tugas10";
import Tugas11 from "../Tugas-11/tugas11";
import Tugas12 from "../Tugas-12/tugas12";
import { DataProvider } from "../contexts/dataContext";
import Data from "../Tugas-13/dataProvider";
import Tugas14 from "../Tugas-14/tugas14";
import Tugas14Form from "../Tugas-14/tugas14Form";
import { SwitchColorContextProvider } from "../contexts/switchColorContext";


const Routes = () => {

  return (
    <Router>
      <DataProvider>
      <SwitchColorContextProvider>
      <Nav/>
      
      <Switch>
        <Route exact path="/">
          <Tugas10 />
        </Route>
        <Route exact path="/tugas11">
          <Tugas11 />
        </Route>
        <Route exact path="/tugas12">
          <Tugas12 />
        </Route>
        <Route exact path="/dataContext">
          <Data />
        </Route>
        <Route exact path="/tugas14">
          <Tugas14/>
        </Route>
        <Route exact path="/tugas14/create">
          <Tugas14Form/>
        </Route>
        <Route exact path="/tugas14/edit/:slug">
          <Tugas14Form/>
        </Route>
      </Switch>

      </SwitchColorContextProvider>
      </DataProvider>
    </Router>
  )
}

export default Routes