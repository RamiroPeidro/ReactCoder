import React from 'react'
//import { ItemCount } from '../ItemCount/ItemCount'
import './ItemCart.scss'

export const ItemCart = ({product, removeFromCart}) => {
    return (
                                
        <div className="row" key={product.id}>
            <div className="col-md-2">
                <img src={product.img} alt={product.name} className="img-fluid imagenCart"/>
            </div>
            <div className="col-md-4 down">
                <h4>{product.name}</h4>
                <h5>{product.amount}</h5>
                <h5>${product.price * product.amount}</h5>
                <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}
