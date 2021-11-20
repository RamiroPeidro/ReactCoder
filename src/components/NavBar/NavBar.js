import React, { useContext, useState } from 'react'
import './NavBar.scss'
import { FaOpencart } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { MiContext } from '../../context/MiContext';
// import { CartWidget } from './CartWidget';




export const NavBar = ({logo, link1, link2, link3, ruta1, ruta2, ruta3}) => {
    const [menu, setMenu] = useState(false);

    let handleMenuOnClick = () => {
        setMenu(!menu);
    }
    
    const { amountOfItems } = useContext(MiContext);

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
                        <Link to="/cart"> 
                            <FaOpencart id="cart-toggle"/>
                            <span id="cart-toggle-count">{amountOfItems()}</span>
                        </Link>
                    </ul>

                </nav>
                <div style={{
                    display: amountOfItems() > 0 ? 'block' : 'none'
                }}>
                    <Link to="/cart"> 
                        <FaOpencart id="cart-menu"/> 
                        <span id="cart-menu-count">{amountOfItems()}</span>
                    </Link>
                </div>
                
                
                <IoMdMenu id="header-toggle" onClick={handleMenuOnClick}/>
            </header>
    )
    
}


