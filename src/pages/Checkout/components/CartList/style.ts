import styled from "styled-components";

export const Title = styled.div`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    margin-bottom: 15px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 40px;
    border-radius: 6px 44px;
    width: 448px;

    background-color: ${props => props.theme["gray-200"]};
`

export const ItemCard = styled.div`
    display: flex;
    gap: 20px;

    img{
        width: 64px;
        height: 64px;
    }
    span{
        font-weight: 700;
        font-size: 16px;
        line-height: 130%;
        color: ${props => props.theme["gray-700"]};
    }
`
export const InfoCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    flex:1;
    span{
        display: block;
        width: 100%;    
    }
`
export const Divider = styled.div`
    width: 100%;
    border: 1px solid ${props => props.theme["gray-400"]};

`

export const Total1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;

`
export const Total = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    color: ${props => props.theme["gray-700"]}
    span{
        font-size: 16px;
    }
`

export const Frame = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    
    color: ${props => props.theme["gray-800"]};
    
    span{
        font-size: 20px;
        line-height: 130%;
        font-weight: 700;
    }
`
