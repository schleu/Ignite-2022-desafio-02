import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import Ilustration from '../../assets/ilustration.svg'
import { paymentMethods } from "../../constants/apiData"
import { localStorageKeys } from "../../constants/localStorageKeys"
import { OrderProps } from "../../context/OrderContext"
import { DeliveryItem } from "./components/DeliveryItem"
import { Container, DeliveryContainer, Title } from "./style"



export const CheckoutSucess = () => {
    const ls = localStorage.getItem(localStorageKeys["LAST-ORDER"])
    const order:OrderProps
     = ls?JSON.parse(ls):{};
    const method = paymentMethods.find(method => method.id === order.address.method)

    const address = `${order.address.street}, ${order.address.number}`
    const cityState = `${order.address.district} - ${order.address.city}, ${order.address.state}`

    return (
        <Container>
            <div>
                <Title size={32} weight={800} >
                    Uhu! Pedido confirmado
                </Title>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <DeliveryContainer>
                    <DeliveryItem title={`Entrega em ${address}`} description={cityState} colorBackgroundIcon="purple"  icon={<MapPin />}/>
                    <DeliveryItem title="Previsão de entrega" description="20 min - 30 min " colorBackgroundIcon="lightYellow"  icon={<Timer />}/>
                    <DeliveryItem title="Pagamento na entrega" description={method?.name || ''} colorBackgroundIcon="yellow"  icon={<CurrencyDollar />}/>
                </DeliveryContainer>
            </div>

            <img src={Ilustration} />
        </Container>
    )
}
