
import React from 'react'
//import Item from './Item'

import { ItemUi } from './ItemUi'

export const ItemList = ({items}) => {
    console.log(items)
    return (
        <div className="contenedor-general">
                {items.map((item)=> (
                    <ItemUi name={item.name} img={item.img} description={item.description} price={item.price} id={item.id}/>
                    )
                )}
            </div>
    )
}

