import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { Container } from  './defaultLayout.styles'

export const DefaultLayout  = () =>{

    return(
        <Container>
            <Header/>
            <Outlet />
        </Container>
    )
}