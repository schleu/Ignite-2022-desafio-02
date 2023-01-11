import { createContext } from "react";
import { iCheckountForm } from "../pages/Checkout";
import { CartProps } from "./CartContext";

export interface OrderProps{
    address: iCheckountForm;
    items: CartProps[];
}

export interface OrderContextProps{
    orders: OrderProps[];
    createOrder: (order:OrderProps)=>void;
}

export const OrderContext = createContext<OrderContextProps>({
    orders:[],
    createOrder: ()=>{},
})