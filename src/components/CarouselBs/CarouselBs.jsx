import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarouselBs.scss'

export const CarouselBs = ({img1, img2, img3}) => {
    return (
        <>
          <Carousel>
            <Carousel.Item className="imagen1">
              <Carousel.Caption>
                <h3 className="carousel-tittle">Simplicity.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="imagen2">
              <Carousel.Caption>
                <h3 className="carousel-tittle">Comfort.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="imagen3">
              <Carousel.Caption>
                <h3 className="carousel-tittle">Know us.</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </>
    )
}
