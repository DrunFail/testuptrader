import { ReactNode } from "react";
import styles from './CustomButton.module.scss';


interface CustomButtonProps {
    children: ReactNode,
    onClick?: () => void,
    refer?: string
}


export default function CustomButton({ children,onClick, refer}: CustomButtonProps) {
    return (
        <a
            onClick={onClick}
            className={styles.button}
            href={refer }
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {children}
        </a>
        );
}