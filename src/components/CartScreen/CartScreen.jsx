import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MiContext } from '../../context/MiContext'
import { ItemCart } from './ItemCart'

export const CartScreen = () => {

    const {carrito, removeAllFromCart, removeFromCart} = useContext(MiContext)
    return (
        <div className="container">
                    <h1 className="mt-3">Resumen del pedido</h1>
                    <hr/>
                    
                    {
                        carrito.map( (products) => {
                            return(
                                <ItemCart key={products.id} product={products} removeFromCart={removeFromCart}/>
                            )
                        })
                    }
            <hr/>
            <div className="row">

                <div className="col-md-12">
                    <h3>Total: ${carrito.reduce( (total, product) => total + product.price * product.amount, 0)}</h3>
                    <button className="btn btn-danger mx-3 my-3" onClick={removeAllFromCart}>Eliminar todo</button>
                    <Link to="/buy"> <button className="btn btn-primary">Finalizar compra</button> </Link>
                </div>
            </div>
        </div>
    )
}
