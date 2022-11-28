import { ReactNode } from "react";
import styles from './CustomButton.module.scss';


interface CustomButtonProps {
    children: ReactNode,
    onClick?: () => void
}


export default function CustomButton({ children,onClick }: CustomButtonProps) {
    return (
        <a onClick={onClick} className={styles.button}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {children}
        </a>
        );
}