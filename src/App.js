import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./components/Sidebar";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={SignUp}/>
                    <Route path='/account' component={Dashboard}/>
                    <Route path='**' component={NotFound}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
