import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUpLink = () => (
    <ul className="right">
        <li><NavLink to="/" activeClassName="active">Sign up</NavLink></li>
    </ul>
);

export default SignUpLink;
