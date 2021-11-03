import { CircularProgress } from '@mui/material';
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from './ItemList';
import './ItemListContainer.scss'



export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);

    const params = useParams()
    console.log(params)
    useEffect(()=> {
        setLoading(false);

        //mock llamado a la api
        pedirProductos()
            .then((res)=> {
                setItems(res);
            })
            .catch((err)=> {
                console.log(err);
            })
            .finally(()=>{
                setLoading(true);
            })
    }, [])

    return (
        <section className="container">
            {!loading ? <CircularProgress className="progress" />: <ItemList items={items}/>}
        </section>
       
    )
}
