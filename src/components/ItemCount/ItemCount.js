import React from 'react'

//recibo por parametro la referencia a la funcion asi puedo usar el setAmount para actualizar el state

export const ItemCount = ( {amount, setAmount, limite} ) => {
    const handleRestar = () => {
        amount > 0 ? setAmount(amount - 1) : setAmount(0)
    }

    const handleSumar = () => {
        amount < limite ? setAmount(amount + 1) : setAmount(limite)
    }

    return (
        <div>
            <button 
                className="btn btn-dark mx-3"
                onClick={handleRestar}
            >-
            </button>

            <span>{amount}</span>

            <button 
                className="btn btn-dark mx-3 my-3"
                onClick={handleSumar}
            >+
            </button>
        </div>
    )
}
