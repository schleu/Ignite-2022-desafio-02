import { useContext } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { appRotes } from "../../constants/rotes"
import { CartContext } from "../../context/CartContext"
import { OrderContext } from "../../context/OrderContext"
import { Router } from "../../Router"
import { CartList } from "./components/CartList"
import { FormCheckout } from "./components/FormCheckout"
import { PaymentMethod } from "./components/PaymentMethod"
import { Container, Info } from "./style"

export interface iCheckountForm{
    method: string;
    cep: string;
    street: string;
    number: string;
    complete: string;
    district: string;
    city: string;
    state: string;
}

export const Checkout = () => {
    const { createOrder } = useContext(OrderContext)
    const { cart } = useContext(CartContext)

    const methods = useForm<iCheckountForm>({
        defaultValues:{
            cep:'',
            city:'',
            complete:'',
            district:'',
            method:'',
            number:'',
            state:'',
            street:'',
        }
    })

    const { handleSubmit, reset} = methods

    const navigate = useNavigate()

    const onSubmit = (address:iCheckountForm) => {
        createOrder({
            address,
            items: cart
        })
        reset();
        navigate(appRotes.checkoutSuccess)
    }

    return (
       <Container onSubmit={handleSubmit(onSubmit)} action=''>
            <Info>
                <FormProvider {...methods} >
                    <FormCheckout />
                    <PaymentMethod />
                </FormProvider>
            </Info>
            <CartList/>
            
       </Container>
    )
}