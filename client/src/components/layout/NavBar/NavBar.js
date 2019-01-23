import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => (
    <div>
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <h2>Game Night</h2>
            </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/shelf"
                            className={
                                window.location.pathname === "/shelf"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Owner Shelves
                        </Link>
                        </li>
                    <li className="nav-item">
                        <Link
                            to="/collection"
                            className={
                                window.location.pathname === "/collection"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                            Game Collection
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link
                            to="/addgame"
                            className={
                                window.location.pathname === "/addgame"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Add a Game
                        </Link>
                        </li> */}
                    <li className="nav-item">
                        <Link
                            to="/about"
                            className={
                                window.location.pathname === "/about"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                            About
                        </Link>
                    </li>
                </ul>
        </nav>
        </div>
);

export default NavBar;