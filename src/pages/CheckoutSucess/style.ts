import styled from "styled-components";
import { TitleBase } from "../../styles/global";



export const Container = styled.div`
    display: flex;
    gap: 24px;
    padding: 40px;
    border-radius: 6px 44px;

    /* background-color: ${props => props.theme["gray-200"]}; */
`

export const DeliveryContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 24px;
    padding: 40px;
    border-radius: 6px 44px;

`

export const Title = styled(TitleBase)`
    color:${props => props.theme["yellow-700"]
}
`
