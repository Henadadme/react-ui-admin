import React from "react";
import '../assets/materialdesignicons.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Organizations from "./Organizations";
import '../App.css';
import Create from "./Create";
import Edit from "./Edit";
import View from "./View";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this)
    }

    logout(e) {
        this.props.history.push('/login')
    }

    render() {
        return (
            <Router>
                <div>
                    <nav className="t-header">
                        <div className="t-header-content-wrapper">
                            <div className="t-header-content">
                                <button className="t-header-toggler t-header-mobile-toggler d-block d-lg-none">
                                    <i className="mdi mdi-menu"/>
                                </button>
                                <ul className="nav ml-auto">
                                    <li className="nav-item dropdown">
                                        <p className="nav-link" onClick={this.logout} id="messageDropdown"
                                           data-toggle="dropdown"
                                           aria-expanded="false">
                                            <i className="mdi mdi-logout-variant mdi-1x" onClick={this.logout}/>
                                            <span
                                                className="notification-indicator notification-indicator-primary notification-indicator-ripple"/>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="page-body">

                        <div className="sidebar">
                            <div className="user-profile">
                                <div className="info-wrapper">
                                    <p className="user-name"></p>
                                </div>
                            </div>
                            <ul className="navigation-menu">
                                <li className="nav-category-divider">MAIN</li>
                                <li>
                                    <Link to='/account'>
                                        <span className="link-title">Dashboard</span>
                                        <i className="mdi mdi-gauge link-icon"></i>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/account/create'>
                                        <span className="link-title">Create</span>
                                        <i className="mdi mdi-clipboard-outline link-icon"></i>
                                    </Link>
                                </li>
                                <li>
                                    <a href="#ui-elements" data-toggle="collapse" aria-expanded="false">
                                        <span className="link-title">Developers</span>
                                        <i className="mdi mdi-bullseye link-icon"></i>
                                    </a>
                                    <ul className="collapse navigation-submenu" id="ui-elements">
                                        <li>
                                            <a href="/account/new">New User</a>
                                        </li>
                                        <li>
                                            <a href="/account/all">View Admins</a>
                                        </li>
                                        <li>
                                            <a href="/account/docs">Docs</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="page-content-wrapper">
                            <div className="page-content-wrapper-inner">
                                <Switch>
                                    <Route exact path='/account' component={Organizations}/>
                                    <Route exact path='/account/create' component={Create}/>
                                    <Route exact path='/account/edit' component={Edit}/>
                                    <Route exact path='/account/view' component={View}/>
                                </Switch>
                            </div>

                        </div>
                    </div>
                </div>
            </Router>

        );
    }
}

export default Dashboard;
