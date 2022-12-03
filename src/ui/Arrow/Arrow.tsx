import styles from './Arrow.module.scss';


interface ArrowProps {
    stateShow: boolean,
    handler: () => void
}


export default function Arrow({ stateShow, handler }: ArrowProps) {
    return (
        <div
            className={styles[stateShow ? 'openArrow' : 'arrow']}
            onClick={handler }
            
        >
            <span className={styles.arrowLeft}></span>
            <span className={styles.arrowRight}></span>
        </div>
        );
}