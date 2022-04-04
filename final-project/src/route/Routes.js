import Cookies from "js-cookie";
import React from "react";
import { Redirect } from "react-router-dom";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import { DataProvider } from "../contexts/context";
import DashboardLayout from "../layout/DashboardLay";
import LandingPage from "../layout/LandingPage";
import ChangePw from "../pages/ChangePw";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import JobBoard from "../pages/JobBoard";
import Login from "../Auth/Login";
import Profile from "../pages/Profile";
import Register from "../Auth/Register";
import SearchPage from "../pages/SearchPage";
import VacancyForm from "../pages/VacancyForm";
import VacancyList from "../pages/VacancyList";
import JobDesc from "../pages/JobDesc";


const Routes = () => {

    const LoginRoute = ({...props}) =>{
        if (Cookies.get('token') !== undefined){
            return <Redirect to="/dashboard" />
        } else if (Cookies.get('token')=== undefined){
            return <Route {...props} />
        }
    }

    const DashRoute = ({...props}) =>{
        if (Cookies.get('token') !== undefined){
            return <Route {...props} />
        } else if (Cookies.get('token')=== undefined){
            return  <Redirect to="/login" />
        }
    }

    return (
        <>
        <Router>
        <DataProvider>
            <Switch>
            
            <Route exact path='/'>
                <LandingPage content={<Home />}/>
            </Route>

            <Route exact path='/job-vacancy/:jobId'>
                <LandingPage content={<JobDesc />}/>
            </Route>

            <Route exact path='/register'>
                <LandingPage content={<Register />}/>
            </Route>

            <LoginRoute exact path='/login'>
                <LandingPage content={<Login />}/>
            </LoginRoute>

            <Route exact path='/job-vacancy'>
                <LandingPage content={<JobBoard />}/>
            </Route>

            <Route exact path='/job-vacancy/search/:searchValue'>
                <LandingPage content={<SearchPage />}/>
            </Route>

            <DashRoute exact path='/dashboard/'>
                <DashboardLayout>
                <Dashboard />
                </DashboardLayout>
            </DashRoute>

            <DashRoute exact path='/dashboard/list-job-vacancy'>
                <DashboardLayout>
                <VacancyList />
                </DashboardLayout>
            </DashRoute>

            <DashRoute exact path='/dashboard/list-job-vacancy/form/create'>
                <DashboardLayout>
                <VacancyForm />
                </DashboardLayout>
            </DashRoute>

            <DashRoute exact path='/dashboard/list-job-vacancy/form/edit/:Id'>
                <DashboardLayout>
                <VacancyForm />
                </DashboardLayout>
            </DashRoute>

            <DashRoute exact path='/change-password'>
                <DashboardLayout>
                <ChangePw />
                </DashboardLayout>
            </DashRoute>

            <DashRoute exact path='/profile'>
                <DashboardLayout>
                <Profile />
                </DashboardLayout>
            </DashRoute>

            </Switch>
            </DataProvider>
        </Router>
        
        </>

    )
}

export default Routes