import React, {Component} from 'react';
import './styles/App.css';
import {
    Link
} from 'react-router-dom';

function Nav() {



    return(
        <nav>
            <h3>CoronaVirus</h3>
            <ul className="nav links">
                <Link to={'/table'}>
                <li>Table</li>
                </Link>

            </ul>
        </nav>
    );

}

export default Nav;
