import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { MiContext } from '../../context/MiContext'
import { CarouselBs } from '../CarouselBs/CarouselBs'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import Swal from 'sweetalert2'

export const ItemDetail = ({name, description, price, button, img, img2, img3, stock, id}) => {
     
    const {goBack} = useHistory();


    const [amount, setAmount] = useState(0);

    const {addToCart, isInCart} = useContext(MiContext)

    
    const handleAgregar = () => {
        const newItem = {
            name,
            description,
            price,
            amount,
            img,
            id
        }

        if(amount > 0){
            addToCart(newItem)
            Swal.fire({
                title: 'Elemento agregado!',
                text: 'Continúa comprando',
                icon: 'success',
                confirmButtonText: 'Continuar'
              })
        } else{
            Swal.fire({
                title: 'Error',
                text: 'Elija una cantidad',
                icon: 'error',
                confirmButtonText: 'Continuar'
              })
        }
    }

    return (
        <>
          <div className="contenedor-general-detail">
                <div className="contenedor-carousel">
                    <CarouselBs tit1={name} tit2={description} tit3={`$${price}`} img1={img} img2={img2} img3={img3}/>
                </div>

                <div className="contenedor-info" style={{backgroundImage: `url(${img})`}}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className={isInCart(id) && "desactivado"}>
                        <ItemCount amount={amount} setAmount={setAmount} limite={stock}/>
                    </div>
                    {
                    isInCart(id) 
                    ? <Link to="/cart" className="btn btn-success">Ir al carrito</Link>
                    :
                    <>
                        <button className="btn btn-danger" 
                            style={{borderRadius: "0px"}}
                            onClick={handleAgregar}>
                                BUY
                        </button>
                    </>
                    }
                    
                    <button className="btn btn-dark" style={{borderRadius: "0px"}} onClick={()=> goBack()} >VOLVER</button>
                </div>

          </div>
        </>
    )
}
