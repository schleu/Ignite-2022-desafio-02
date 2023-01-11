import { ReactNode } from "react";
import { Container } from "./style";

interface DeliveryItemProps{
    icon: ReactNode;
    colorBackgroundIcon: 'purple' | 'lightYellow' | 'yellow';
    title: string;
    description: string;
}

export const DeliveryItem = ({title, description,icon,colorBackgroundIcon}:DeliveryItemProps) => (
    <Container colorBackgroundIcon={colorBackgroundIcon}>
        <span>{icon}</span>
        <div>
            {title}
            <p>
                {description}
            </p>
        </div>
    </Container>
)