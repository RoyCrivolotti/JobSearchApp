import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLink = () => (
    <ul className="right">
        <li><NavLink to="/" activeClassName="active">Sign out</NavLink></li>
    </ul>
);

export default SignOutLink;
