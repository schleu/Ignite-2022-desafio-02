import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import CoffeeImage from '../../assets/coffee.png'
import { CoffeeCard } from "./components/CoffeeCard"
import { coffeeList } from "./coffee"
import { HomeContainer, IconItem, Info, Intro, Item, Items, OurCoffee, Title } from './home.styles'

export const Home = () =>{

    return(
        <HomeContainer>
            <Intro>
                <Info>
                    <Title>
                        <h1>
                            Encontre o café perfeito para qualquer hora do dia
                        </h1>
                        <h3>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </h3>
                    </Title>
                    <Items>
                        <Item>
                            <IconItem color='yellow-700'>
                                <ShoppingCart size={16} />
                            </IconItem>
                            Compra simples e segura
                        </Item>
                        <Item>
                            <IconItem color='gray-700'>
                                <Package size={16} />
                            </IconItem>
                            Embalagem mantém o café intacto
                        </Item>
                        <Item>
                            <IconItem color='yellow-400'>
                                <Timer size={16} />
                            </IconItem>
                            Entrega rápida e rastreada
                        </Item>
                        <Item>
                            <IconItem color='purple-400'>
                                <Coffee size={16} />
                            </IconItem>
                            O café chega fresquinho até você
                        </Item>

                    </Items>
                </Info>
                <img src={CoffeeImage} width={476} height={360} />
            </Intro>
            <OurCoffee>
                {coffeeList.map((item,index)=>
                    <CoffeeCard {...item} key={index} />
                )}
            </OurCoffee>
        </HomeContainer>
    )
}