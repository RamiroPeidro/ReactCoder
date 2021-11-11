import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router';
import { ItemDetail } from './ItemDetail';
// import { pedirProductos } from '../../helpers/pedirProductos';
import { getFirestore } from '../../firebase/config';


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const {itemId} = useParams();

    useEffect(() => {
        setLoading(true);
        
        const db = getFirestore();
        const stockRef = db.collection('stock');
        const item = stockRef.doc(itemId);


        item.get()
        
            .then((doc) =>{
                setItem({
                    id: doc.id, ...doc.data()
                })
            })
            .finally(() => {
                setLoading(false);
            })

    }, [itemId, setLoading]);

    console.log(item, "el item es")
    return (
        <div>
            {
                loading ? <CircularProgress className="progress"/> : 
                <ItemDetail {...item}/>
            }
        </div>
        
    )
}
