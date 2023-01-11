import { Trash } from "phosphor-react"
import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../../context/CartContext"
import { NumberFormat } from "../../../../helper/numberFormat"
import { ButtonDefault, ButtonRemove } from "../../../../components/Button/button.style"
import { CounterButton } from "../../../../components/CounterButton"
import { Container, Divider, Frame, InfoCard, ItemCard, Title, Total, Total1 } from "./style"


export const CartList = () => {
    const { cart, removeItem, addItem } = useContext(CartContext)
    const [totalValue, setTotalValue] = useState(0)
    const delivery = 3.5
    const totalItems = cart.reduce((acc,cur)=>{
        return acc += cur.price*cur.quantity
    },0)

    useEffect(()=>{
        setTotalValue(totalItems+delivery)
    },[cart])

    return (
        <div>
            <Title>
                Cafés selecionados
            </Title>
            <Container>
                {cart.map(item => (
                    <React.Fragment  key={item.id}>
                        <ItemCard>
                            <img src={item.image}/>
                            
                            <InfoCard>
                                <span>{item.title}</span>
                                <CounterButton initialCouter={item.quantity} onChange={(e)=>addItem({...item, quantity:e })} />
                                <ButtonRemove onClick={()=> removeItem(item.id)}>
                                    <Trash size={16} />
                                    Remover
                                </ButtonRemove>
                            </InfoCard>

                            <span>
                                {NumberFormat(item.price * item.quantity)}
                            </span>
                        </ItemCard>
                        <Divider />
                    </React.Fragment>
                ))}

                <Total1>
                    <Total>
                        Total de itens <span>{NumberFormat(totalItems)}</span>
                    </Total>
                    <Total>
                        Entrega <span>{NumberFormat(delivery)}</span>
                    </Total>
                    <Frame>
                        Total de itens <span>{NumberFormat(totalValue)}</span>
                    </Frame>
                </Total1>

                <ButtonDefault type="submit">
                    Confirmar pedido
                </ButtonDefault>
            </Container>
        </div>
    )
}