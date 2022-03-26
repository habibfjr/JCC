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
import Tugas15 from "../Tugas-15/tugas15";
import Tugas15Form from "../Tugas-15/tugas15Form";


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
          <DataProvider>
          <Tugas14/>
          </DataProvider>
        </Route>

        <Route exact path="/tugas14/create">
          <Tugas14Form/>
        </Route>

        <Route exact path="/tugas14/edit/:slug">
        <DataProvider>
          <Tugas14Form/>
        </DataProvider>
        </Route>

        <Route exact path="/tugas15">
          <DataProvider>
          <Tugas15/>
          </DataProvider>
        </Route>

        <Route exact path="/tugas15/create">
          <Tugas15Form/>
        </Route>

        <Route exact path="/tugas15/edit/:slug">
        <DataProvider>
          <Tugas15Form/>
        </DataProvider>
        </Route>
      </Switch>

      </SwitchColorContextProvider>
      </DataProvider>
    </Router>
  )
}

export default Routes