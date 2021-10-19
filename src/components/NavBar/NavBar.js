import React, { useRef, useState } from 'react'
import './NavBar.scss'
import { FaOpencart } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';




export const NavBar = ({logo, link1, link2, link3, ruta1, ruta2, ruta3}) => {
    const [menu, setMenu] = useState(false);

    let handleMenuOnClick = () => {
        setMenu(!menu);
    }
    
    
    return (
            <header>
                <div className="logo">
                <Link to="/" className ="nav-link"><img className="img-fluid hola" src={logo} alt="logo"/></Link>
                </div>

                <nav className={menu ? "nav show" : "nav"} id="nav-menu">
                    <IoMdClose id="header-close" onClick={handleMenuOnClick}/>

                    <ul className="nav-list">
                        
                        <li className="nav-item"> <NavLink exact to={ruta1} className ="nav-link" activeClassName={'activeLink'}> {link1}</NavLink> </li>
                        <li className="nav-item"> <NavLink exact to={ruta2} className ="nav-link" activeClassName={'activeLink'}> {link2}</NavLink> </li>
                        <li className="nav-item"> <NavLink exact to={ruta3} className ="nav-link" activeClassName={'activeLink'}> {link3}</NavLink> </li>
                        <FaOpencart id="cart-toggle"/>
                    </ul>

                </nav>

                <Link to="/cart"> <FaOpencart id="cart-menu"/> </Link>
                
                <IoMdMenu id="header-toggle" onClick={handleMenuOnClick}/>
            </header>
    )
    
}





// let cerrarMenu = () => {
//     navMenu.classList.remove("show");
// }