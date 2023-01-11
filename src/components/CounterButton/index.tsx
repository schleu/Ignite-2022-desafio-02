import { Minus, Plus } from "phosphor-react"
import { useEffect, useState } from "react"
import { Counter } from "./counterButton.style"

interface CounterButtoonProps{
    initialCouter?:number;
    onChange?:(i:number)=>void
}


export const CounterButton = ({initialCouter=0, onChange=()=>{}}:CounterButtoonProps) => {
    const [qtd, setQtd] = useState(initialCouter);

    useEffect(()=>{
        onChange(qtd);
    },[qtd])

    return (
        <Counter>
            <Minus size={14} onClick={()=>setQtd(prev=> prev-1)} />
            {qtd}
            <Plus size={14} onClick={()=>setQtd(prev=> prev+1)} />
        </Counter>
    )
}