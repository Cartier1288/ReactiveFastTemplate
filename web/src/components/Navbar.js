import '../styles/components/Navbar.scss';

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className="map__navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
}