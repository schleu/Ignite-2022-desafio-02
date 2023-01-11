import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/DefaultLayout'
import { appRotes } from './constants/rotes'
import { Checkout } from './pages/Checkout'
import { CheckoutSucess } from './pages/CheckoutSucess'
import { Home } from './pages/Home'


export const Router = ()=>{

    return(
        <Routes>
            <Route  path='/' element={<DefaultLayout/>}>
                <Route path={appRotes.home} element={<Home />} />
                <Route path={appRotes.checkout} element={<Checkout />} />
                <Route path={appRotes.checkoutSuccess} element={<CheckoutSucess />} />
            </Route>
        </Routes>
    )
}