import React from 'react'
import './NavBar.scss'
import { FaOpencart } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";




export const NavBar = ({logo, link1, link2, link3}) => {
    return (
            <header>
                <div className="logo">
                    <img className="img-fluid hola" src={logo} alt="logo"/>
                </div>

                <nav className="nav" id="nav-menu">
                    <IoMdClose id="header-close" onClick={cerrarMenu}/>

                    <ul className="nav-list">
                        <li className="nav-item"> <a className ="nav-link">{link1}</a> </li>
                        <li className="nav-item"><a className ="nav-link">{link2}</a> </li>
                        <li className="nav-item"><a className ="nav-link">{link3}</a> </li>
                        <FaOpencart id="cart-toggle"/>
                    </ul>

                </nav>

                <FaOpencart id="cart-menu"/>
                <IoMdMenu id="header-toggle" onClick={abrirMenu}/>
            </header>
    )
}

const navMenu = document.getElementById("nav-menu");


let abrirMenu = () => {
    console.log("hola")
    navMenu.classList.toggle("show");
}

let cerrarMenu = () => {
    navMenu.classList.remove("show");
}