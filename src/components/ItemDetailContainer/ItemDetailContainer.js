import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router';
import { ItemDetail } from './ItemDetail';
import { pedirProductos } from '../../helpers/pedirProductos';


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const {itemId} = useParams();

    useEffect(() => {
        setLoading(true);
        pedirProductos()
        .then((res) =>{
            setItem(res.find( prod => prod.id === Number(itemId)) )
        })
        .finally(() => {
            setLoading(false);
        })

    }, [itemId]);

    return (
        <div>
            {
                loading ? <CircularProgress className="progress"/> : 
                <ItemDetail {...item}/>
            }
        </div>
        
    )
}
