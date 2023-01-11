
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

export interface MethodsProps{
    id: string,
    name: string,
    icon: JSX.Element
}

export const paymentMethods:MethodsProps[] = [
    {
        id: '21f27e97-59e8-4fff-a75d-5f24228b55ec',
        name: 'Cartão de Crédito',
        icon: <CreditCard size={16} />
    },
    {
        id: '16f9c9ce-dec9-4eaa-8b38-97e7ac4284c1',
        name: 'Cartão de Débito',
        icon: <Bank size={16} />
    },
    {
        id: '4c47615b-ae67-4f0f-a4fb-de6f44d2f08e',
        name: 'Dinheiro',
        icon: <Money size={16} />
    },
]