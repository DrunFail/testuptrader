import styles from './BlackButton.module.scss';

interface BlackButtonProps {
    children: React.ReactNode,
    type?: 'submit' | 'button',
    onClick?:() => void
}


export default function BlackButton({ children, type, onClick }: BlackButtonProps) {
    return (
        <button
            className={styles.button}
            type={type}
            onClick={onClick }
        >
            {children}
        </button>
    );
}