import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo-coffee-delivery.svg'

import { appRotes } from '../../constants/rotes'
import { CartContext } from '../../context/CartContext'
import { Cart, HeaderContainer, Location, Navegation } from './header.styles'


export const Header = () =>{
    const { cart } = useContext(CartContext)
    return(
        <HeaderContainer>
            <NavLink to={appRotes.home}>
                <img src={Logo} />
            </NavLink>
            <Navegation>
                <Location>
                    <MapPin size={22} />
                    Porto Alegre
                </Location>
                <NavLink  to={appRotes.checkout}>
                    <Cart>
                        {
                            cart.length > 0 ?
                            <span>{cart.length}</span>
                            :<></>
                        }
                        <ShoppingCart size={22}/>
                    </Cart>
                </NavLink>
            </Navegation>
        </HeaderContainer>
    )
}