import React from 'react'
import Item from './Item'

export const ItemList = ({items}) => {
    return (
        <div className="contenedor-general">
                {items.map((item)=> (
                    <Item name={item.name} img={item.img} description={item.description} price={item.price} button="Mas info" />
                    )
                )}
            </div>
    )
}
