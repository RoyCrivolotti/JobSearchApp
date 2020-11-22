import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLink = () => (
    <ul className="right">
        <li><NavLink to="/" activeClassName="active">Sign in</NavLink></li>
    </ul>
);

export default SignInLink;
