import { ReactNode, useEffect, useState } from "react"
import { localStorageKeys } from "../constants/localStorageKeys"
import { CartContext, CartContextProps, CartProps } from "../context/CartContext"


export const CartProvider = ({children}:{children:ReactNode}) => {
    const ls = localStorage.getItem(localStorageKeys.CART)    
    const lsCart:CartProps[] = ls ? JSON.parse(ls) : [];

    const [state, setState] = useState<CartProps[]>(lsCart)


    useEffect(()=>{
        const cart = JSON.stringify(state)
        localStorage.setItem(localStorageKeys.CART, cart)
    },[state])

    const handleAddItem = (item:CartProps) => {
        const itemFinded = state.find(e=> e.id === item.id)
        itemFinded ?
        setState(prev => prev.map(e=>
                e.id === item.id ? {
                    ...e,
                    quantity: item.quantity,
                } : e
            )
        )
        : setState(prev => [...prev, item])
    }

    const removeItem = (id:string) => {
        const filterState = state.filter(e=> e.id !== id)
        setState(filterState);
    }

    const value:CartContextProps = {
        cart: state,
        addItem: (item:CartProps) => handleAddItem(item),
        removeItem: (id:string) => removeItem(id),
        resetCart:()=> setState([])
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
    
}