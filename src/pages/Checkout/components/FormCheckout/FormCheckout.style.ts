import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 40px;
    border-radius: 6px 44px;

    background-color: ${props => props.theme["gray-200"]};
`

export const Title = styled.div`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    margin-bottom: 15px;
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

export const InputsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

`

const Input = styled.input`
    color: ${props => props.theme["gray-700"]};
    background-color: ${props => props.theme["gray-300"]};
    border: 1px solid  ${props => props.theme["gray-400"]};
    padding: 12px;
    gap: 4px;
    border-radius: 4px;
    outline: none;

    &:active{
        border: 1px solid ${props => props.theme["yellow-700"]}!important;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`

export const InputCep = styled(Input)`
    width: 200px;
`

export const InputStreet = styled(Input)`
    width: 100%;
`

export const InputNumber = styled(Input)`
    width: 200px;
`

export const InputComplete = styled(Input)`
    flex: 1;
`

export const InputDistrict = styled(Input)`
    width: 200px;
`

export const InputCity = styled(Input)`
    flex:1;
`

export const InputState = styled(Input)`
    width: 68px;
`