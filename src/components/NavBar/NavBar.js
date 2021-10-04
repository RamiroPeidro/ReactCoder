import React from 'react'
import { CartWidget } from './CartWidget'


export const NavBar = ({brandName, link1, link2, link3}) => {
    return (
            <header>
                <nav className="nav-bar">
                    <div className="nav-brand">
                        <h2>{brandName}</h2>
                    </div>

                    <ul className="nav-links">
                        <p><a href="buzos">{link1}</a></p>
                        <p><a href="buzos">{link2}</a></p>
                        <p><a href="buzos">{link3}</a></p>
                    </ul>

                    <CartWidget logo="https://w7.pngwing.com/pngs/387/168/png-transparent-shopping-cart-button-graphy-earring-shopping-cart-angle-rectangle-logo.png" alt="logo"/>
                </nav>
            </header>
    )
}
