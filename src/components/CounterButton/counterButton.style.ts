import styled from "styled-components";

export const Counter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
    border-radius: 6px;
    

    background-color: ${props => props.theme["gray-400"]};
    svg{
        cursor: pointer;
        color: ${props => props.theme["purple-400"]};
    }
`