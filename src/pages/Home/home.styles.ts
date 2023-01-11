import styled from "styled-components";
import {defaultTheme} from '../../styles/themes/default'
import background from '../../assets/background.png'



export const HomeContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
`

export const Intro = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;
    padding: 94px 160px 108px;
    background: url(${background});

`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1{
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 48px;
        color: ${props => props.theme["gray-900"]};
    }

    h3{
        font-size: 20px;
        color: ${props => props.theme["gray-700"]};
    }
`

export const Items = styled.div`

    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px 40px;
`

interface IconItemProps {
    color: keyof typeof defaultTheme;
}

export const IconItem = styled.div<IconItemProps>`
      flex-shrink: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${props => props.theme['white']};
        height: 32px;
        width: 32px;
        border-radius: 50%;
        background-color: ${props => props.theme[props.color]};

`

export const Item = styled.div`
    width: calc(50% - 20px);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${props => props.theme["gray-700"]};
`
export const OurCoffee = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;
    padding: 94px 160px 108px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
`