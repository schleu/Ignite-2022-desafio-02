import { ReactNode, useContext, useEffect, useState } from "react"
import { localStorageKeys } from "../constants/localStorageKeys"
import { CartContext } from "../context/CartContext";
import { OrderContext, OrderProps, OrderContextProps} from '../context/OrderContext'

export const OrderProvider = ({children}:{children:ReactNode}) => {
    const storageKey = localStorageKeys.ORDER;
    const ls = localStorage.getItem(storageKey)    
    const lsOrder:OrderProps[] = ls ? JSON.parse(ls) : [];

    const [state, setState] = useState<OrderProps[]>(lsOrder)

    const {resetCart} = useContext(CartContext)

    useEffect(()=>{
        const order = JSON.stringify(state)
        localStorage.setItem(storageKey, order)
    },[state])

    const createOrder = (item:OrderProps) => {
        setState(prev => [...prev, item]);
        localStorage.setItem(localStorageKeys["LAST-ORDER"], JSON.stringify(item))
        resetCart()        
    }

    const value:OrderContextProps = {
        orders: state,
        createOrder
    }

    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    )
    
}