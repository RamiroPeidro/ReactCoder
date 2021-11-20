import React from 'react'
import { dataAbout } from '../../data/dataAbout'
import './AboutUs.scss'
import { CardAboutUs } from './CardAboutUs'

export const AboutUs = () => {

    
    const data = dataAbout;

    return (
        <>
            <div className="contenedor-banner">
                <h2>About us.</h2>
            </div>

            <div className="contenedor-about">
                {data.map((item)=> (
                    <CardAboutUs img={item.img} title={item.title} description={item.description}/>
                    )
                )}
            </div>
        </>
    )
}
