import { CurrencyDollar } from "phosphor-react";
import { useFormContext } from "react-hook-form";

import { paymentMethods } from "../../../../constants/apiData";
import { Address, AddressContainer, AddressTitle, Container, PaymentContainer, Tag } from "./Payment.style";

export const PaymentMethod = () => {

    const { register, watch} = useFormContext()
    const selectedMethod = watch('method')

    return(
        <Container>
            <AddressContainer>
                <CurrencyDollar size={22} />
                <div>
                    <AddressTitle>Pagamento</AddressTitle>
                    <Address>O pagamento é feito na entrega. Escolha a forma que deseja pagar</Address>
                </div>
            </AddressContainer>
            <PaymentContainer>
                {paymentMethods.map(method => 
                    <Tag key={method.id} isSelected={selectedMethod === method.id} htmlFor={method.id}>
                        {method.icon}
                        {method.name}
                        <input type="radio" hidden value={method.id} id={method.id}  {...register('method')}/>
                    </Tag>                    
                )}
            </PaymentContainer>
        </Container>
    )
}