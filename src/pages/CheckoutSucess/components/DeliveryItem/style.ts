import styled from "styled-components";
import { defaultTheme } from "../../../../styles/themes/default";


enum ColorBackgroundIcon {
    purple= "purple-400",
    lightYellow= "yellow-400",
    yellow= "yellow-700"
}


interface ContainerProps{
    colorBackgroundIcon:'purple' | 'lightYellow' | 'yellow';
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    gap: 12px;

    span{
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        background-color: ${
            props => props.theme[
                ColorBackgroundIcon[props.colorBackgroundIcon]
            ]
        };
        color: ${props => props.theme.white};
        border-radius: 50%;
    }

    div{
        display: flex;
        flex-direction: column;

        p{
            font-weight: 700;
        }
    }
`

