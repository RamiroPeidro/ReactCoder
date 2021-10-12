import { stock } from "../data/stock";


export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        //para simular la llamada (el delay)
        setTimeout(() => {
            resolve(stock);
        }, 0);
    })

}