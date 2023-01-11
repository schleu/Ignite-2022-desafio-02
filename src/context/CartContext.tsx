import { createContext } from "react";
import { CoffeeCardProps } from "../pages/Home/components/CoffeeCard";

export interface CartProps extends CoffeeCardProps{
    quantity:number;
}

export interface CartContextProps{
    cart: CartProps[];
    addItem: (item:CartProps)=>void;
    removeItem: (id:string)=>void;
    resetCart: ()=>void;
}

export const CartContext = createContext<CartContextProps>({
    cart:[],
    addItem: ()=>{},
    removeItem: ()=>{},
    resetCart: ()=>{},
})