import React from 'react'
import {Nav,NavLink,NavMenu} from './navbarelements';
import LOGO from '../Images/Logo.jpeg';
import '../style.css';


const Navbar = () => {
    return (
        <>
        <Nav>
            <div className="Navbar-Component">
                <img src={LOGO} alt="logo"/>
                <div >
                    Learntostudy
                </div>
            </div>
            <NavMenu>
                <NavLink to="/" >
                    Home
                </NavLink>
                <NavLink to="/resources" >
                    Resources
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar;
