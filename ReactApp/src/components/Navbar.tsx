import React from 'react';
import { NavLink } from 'react-router-dom';

import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
import SignUpLink from './SignUpLink';

const Navbar = () => (
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <div className="left">
                <ul className="nav-mobile left">
                    {/* <Link to='/' className='brand-logo left'>Home</Link> */}
                    <NavLink
                      to="/"
                      activeClassName="active"
                      className="navbar-title left"
                    >
                        Home
                    </NavLink>

                    <SignInLink />
                    <SignOutLink />
                    <SignUpLink />
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
