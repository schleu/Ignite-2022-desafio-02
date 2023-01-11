import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 40px;
    border-radius: 6px 44px;

    background-color: ${props => props.theme["gray-200"]};
`

export const AddressContainer = styled.div`
    display: flex;
    gap: 8px;
    svg{
        color: ${props => props.theme["yellow-700"]};
    }
`

export const AddressTitle = styled.div`
    font-size: 16px;
    line-height: 130%;
    color: ${props => props.theme["gray-800"]};
`

export const Address = styled.div`
    font-size: 14px;
    line-height: 130%;
    color: ${props => props.theme["gray-700"]};
`

export const PaymentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`
interface TagProps{
    isSelected:boolean;
}

export const Tag = styled.label<TagProps>`
    flex:1;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 16px;
    gap: 12px;
    border-radius: 6px;
    
    cursor: pointer;
    
    background-color: ${props => props.theme[props.isSelected?"purple-200":"gray-400"]};

    &:hover{
        background-color: ${props => props.theme["gray-500"]};
    }
    border: 1px solid ${props => props.isSelected?props.theme["purple-400"]:'transparent'};
    

    svg{
        color: ${props => props.theme["purple-400"]};
    }
`