import { logDOM } from "@testing-library/react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
import logo from "../../imgs/logo.svg";
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
