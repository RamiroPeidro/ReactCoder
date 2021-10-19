import React from 'react'
import { useHistory } from 'react-router'
import { CarouselBs } from '../CarouselBs/CarouselBs'
import './ItemDetail.scss'

export const ItemDetail = ({name, description, price, button, img, img2, img3}) => {
     
    const {goBack} = useHistory();

    return (
        <>
          <div className="contenedor-general-detail">
                <div className="contenedor-carousel">
                    <CarouselBs tit1={name} tit2={description} tit3={price} img1={img} img2={img2} img3={img3}/>
                </div>
                <div className="contenedor-info" style={{backgroundImage: `url(${img})`}}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <button className="btn btn-danger" style={{borderRadius: "0px"}}>BUY</button>
                    <button className="btn btn-dark" style={{borderRadius: "0px"}} onClick={()=> goBack()} >VOLVER</button>
                </div>
          </div>
        </>
    )
}
