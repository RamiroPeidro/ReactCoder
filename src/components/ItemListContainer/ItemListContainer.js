import { CircularProgress } from '@mui/material';
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { getFirestore } from '../../firebase/config';
//import { useParams } from 'react-router';
import { ItemList } from './ItemList';
import './ItemListContainer.scss'



export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams()


    useEffect(()=> {
        const db = getFirestore();
        const stockRef = categoryId ? db.collection('stock').where('description', '==', categoryId) : db.collection('stock');

        stockRef.get()

            .then((response) => {
                const newItems = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })        
                setItems(newItems)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(true);
            })
        

        }, [setLoading, categoryId])

        
        return (
            <section className="container">
            {!loading ? <CircularProgress className="progress" />: <ItemList items={items}/>}
        </section>
       
       )
    }

