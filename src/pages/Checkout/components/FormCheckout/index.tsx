import { MapPin } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { Address, AddressContainer, AddressTitle, Container, InputCep, InputCity, InputComplete, InputDistrict, InputNumber, InputsContainer, InputState, InputStreet, Title } from "./FormCheckout.style";
import cep, {CEP as cepProps} from 'cep-promise'
import { useEffect } from "react";

export const FormCheckout = () => {
    const { register, watch, setValue } = useFormContext()
    const c:string = watch('cep');

    useEffect(()=>{
        async function findCep() {
            if(c.length === 8){
                const cc:cepProps = await cep(c);
                const d = Object.keys(cc)
                
                d.forEach((e:string) => {
                    const x = cc[e];
                    setValue(e, x);
                })
            }
        }
        findCep()
    },[c])

    return(
        <div>
            <Title>Complete seu pedido</Title>
            <Container>
                <AddressContainer>
                    <MapPin size={22} />
                    <div>
                        <AddressTitle>Endereço de Entrega</AddressTitle>
                        <Address>
                            Informe o endereço onde deseja receber seu pedido
                        </Address>
                    </div>
                </AddressContainer>
                <InputsContainer>
                    <InputCep pattern="\d{8}" placeholder="CEP" type='text' {...register('cep')}/>
                    <InputStreet placeholder="Rua" type='' {...register('street')}/>
                    <InputNumber placeholder="Número" type='text' {...register('number')}/>
                    <InputComplete placeholder="Complemento" type='text' {...register('complete')}/>
                    <InputDistrict placeholder="Bairro" type='text' {...register('district')}/>
                    <InputCity placeholder="Cidade" type='text' {...register('city')}/>
                    <InputState placeholder="UF" type='text' {...register('state')}/>
                </InputsContainer>
            </Container>
        </div>
    )
}