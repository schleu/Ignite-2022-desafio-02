import styled from "styled-components";



export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 1440px;
    padding: 32px 160px;
    display: flex;
    justify-content: space-between;   
    align-items: center;
`

export const Navegation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:0.75rem;

`
export  const Location = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    gap: 0.25rem;
    
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;

    background-color: ${props => props.theme['purple-200']};
    color: ${props => props.theme['purple-700']};

    img{
        color: ${props => props.theme['purple-400']};
    }
`

export  const Cart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    padding: 8px;
    border-radius: 6px;
    background-color: ${props => props.theme['yellow-200']};
    position: relative;

    img{
        color: ${props => props.theme['yellow-700']};
    }
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;

        position: absolute;
        top: -0.5rem;
        left: 1.5rem;

        font-weight: 700;
        font-size: 12px;
        line-height: 130%;

        border-radius: 50%;
        color: ${props => props.theme.white};
        background-color: ${props => props.theme["yellow-700"]};

    }
`