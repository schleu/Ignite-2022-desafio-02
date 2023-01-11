import styled, {createGlobalStyle} from "styled-components";



export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;       
    }
`

interface TitleBaseProps{
    size: 18|20|32|48;
    weight:700|800;
}

export const TitleBase = styled.h1<TitleBaseProps>`
    font-family: 'Baloo 2';
    font-size: ${props => props.size}px;
    font-weight:${props => props.weight} ;
`

interface TextBaseProps{
    size: 10|12|14|16|18|20|24;
    weight:400|700;
    lineHeight?:130|160;
}
export const TextBase = styled.p<TextBaseProps>`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: ${props => props.weight};
    font-size: ${props => props.size}px;
    line-height: ${props => props.lineHeight && 130}%;
`