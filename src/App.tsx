import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from './provider/CartProvider'
import { OrderProvider } from './provider/OrderProvider'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {

  return (
    <>
      <CartProvider>
        <OrderProvider>
          <ThemeProvider theme={defaultTheme} >
            <BrowserRouter>
              <Router  />
            </BrowserRouter>
            <GlobalStyle />
          </ThemeProvider>
        </OrderProvider>
      </CartProvider>
    </>
  )
}

export default App
