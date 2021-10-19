import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarouselBs.scss'

export const CarouselBs = ({tit1, tit2, tit3, img1, img2, img3}) => {
    return (
        <>
          <Carousel>
            <Carousel.Item className="imagen1" style={{backgroundImage: `url(${img1})`}}>
              <Carousel.Caption>
                <h3 className="carousel-tittle">{tit1}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="imagen2" style={{backgroundImage: `url(${img2})`}}>
              <Carousel.Caption>
                <h3 className="carousel-tittle">{tit2}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="imagen3" style={{backgroundImage: `url(${img3})`}}>
              <Carousel.Caption>
                <h3 className="carousel-tittle">{tit3}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </>
    )
}
