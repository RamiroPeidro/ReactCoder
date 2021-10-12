import { CircularProgress } from '@mui/material';
import React, { useEffect, useState} from 'react'
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from './ItemList';
import './ItemListContainer.scss'



export const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false);
    
    
    useEffect(()=> {
        setLoading(true);

        //mock llamado a la api
        pedirProductos()
            .then((res)=> {
                setItems(res);
            })
            .catch((err)=> {
                console.log(err);
            })
            .finally(()=>{
                setLoading(false);
            })
    }, [])

    return (
        <section className="container my-5">
            {loading ? <CircularProgress />: <ItemList items={items}/>}
        </section>
       
    )
}
