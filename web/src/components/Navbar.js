import '../styles/components/Navbar.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import SelectLanguage from './SelectLanguage';

export default function Navbar(props) {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <SelectLanguage />
        </div>
    );
}