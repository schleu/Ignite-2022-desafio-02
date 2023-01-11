import { ShoppingCartSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../../context/CartContext";
import { NumberFormat } from "../../../../helper/numberFormat";
import { ButtonAddToCart } from "../../../../components/Button/button.style";
import { CounterButton } from "../../../../components/CounterButton";
import { Card, Description, Message, Money, Tag, Tags, Title } from "./style";
import {useToggle} from 'react-use'


type tags = "tradicional" | "com leite" | "alcoólico" | "especial" | "gelado";

export interface CoffeeCardProps{
    id: string,
    tags: tags[],
    title: string,
    description:  string;
    price:number;
    image:string;
}

export const CoffeeCard = ({id, tags, title, description, price, image}:CoffeeCardProps) => {
    const [empty, toggleEmpty] = useToggle(false)
    const { cart, addItem}  = useContext(CartContext)
    const item = cart.find(e=> e.id === id)

    const [qtd, setQtd] = useState(item?.quantity ?? 0)

    const handleAddOnCart = () => {
        if(qtd === 0) {
            toggleEmpty(true)

            setTimeout(() => {
                toggleEmpty(false) 
            }, 1500);
        }else{
            addItem({
                id,
                tags,
                title, description, price, image,
                quantity: qtd
            })
        }
    }
    
    return (
    <Card>
        <img src={image} />
        <Tags>
            {tags.map(item=>
                <Tag key={item}>{item}</Tag>
            )}
        </Tags>
        <Title>{title}</Title>
        <Description>
            {description}
        </Description>
        <Money>
            {NumberFormat(price)}
            <CounterButton initialCouter={qtd} onChange={e=>setQtd(e)} />

            <ButtonAddToCart onClick={()=>handleAddOnCart()} >
                <ShoppingCartSimple size={22}/>
            </ButtonAddToCart>
            {empty ? 
                <Message>
                    Adicione no mínimo 1 item.
                </Message>
                :''}
        </Money>
    </Card>
    )
}