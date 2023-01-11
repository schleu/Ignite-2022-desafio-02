import styled from "styled-components";

export const Card = styled.div`
    width: 16rem;
    height: 19.375rem;
    border-radius: 6px 36px;
    background-color: ${props => props.theme["gray-200"]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 24px;
    img{
        margin-top: -4rem;
    }
`

export const Tag = styled.span`
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    text-transform: uppercase;
    
    padding: 4px 8px;
    border-radius: 100px;

    color: ${props => props.theme["yellow-700"]};
    background-color: ${props => props.theme["yellow-200"]};
`
export const Tags = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 12px;
    margin-bottom: 16px;
`

export const Title = styled.p`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: ${props => props.theme["gray-800"]};
    
    `

export const Description = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: ${props => props.theme["gray-600"]};
    text-align: center;
    margin-top: 8px;
    margin-bottom: 33px;
`

export const Money = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 29px;
    position: relative;
`

export const Message = styled.div`
    position: absolute;
    top: 3rem;
    right: 0;

    width: 120px;
    text-align: right;

    background-color: ${props => props.theme["gray-100"]};
    border: 1px solid ${props => props.theme["gray-400"]};
    border-radius: 8px;
    padding: 4px;
    
`
