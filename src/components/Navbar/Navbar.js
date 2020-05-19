import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">ExerciseTracker</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact activeClassName="active">Exercises</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/exercise" activeClassName="active">New Exercise</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/user" activeClassName="active">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}