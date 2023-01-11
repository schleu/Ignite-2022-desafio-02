import styled from "styled-components";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border: 0;
    border-radius: 6px;

    box-shadow: none;
    cursor: pointer;

    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
`

export const ButtonDefault = styled(Button)`
    padding: 12px 8px;
    
    background-color: ${props => props.theme["yellow-400"]};
    color: ${props => props.theme.white};

    &:hover{
        background-color: ${props => props.theme["yellow-700"]};
    }
`

export const ButtonAddToCart = styled(Button)`
    padding: 8px;

    background-color: ${props => props.theme["purple-700"]};
    color: ${props => props.theme.white};

    &:hover{
        background-color: ${props => props.theme["purple-400"]};
    }
`

export const ButtonRemove = styled(Button)`
    padding: 8px;

    font-size: 12px !important;
    text-transform: uppercase;

    background-color: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["gray-700"]};
    
    &:hover{
        background-color: ${props => props.theme["gray-500"]};
        color: ${props => props.theme["gray-800"]};
    }
    svg{
        color: ${props => props.theme["purple-400"]};
    }
`