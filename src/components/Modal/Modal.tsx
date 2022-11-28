import { useState } from 'react';
import styles from './Modal.module.scss';


interface ModalProps {
    children: React.ReactNode,
    textButton: string
}

export default function Modal({ children, textButton }: ModalProps) {
    const [isVisibleModal, setIsVisibleModal] = useState(false)

    const closeModal = () => {
        setIsVisibleModal(!isVisibleModal)
    }

    return (
        <>
        <button onClick={() => setIsVisibleModal(!isVisibleModal)}>{textButton }</button>

        {isVisibleModal &&
                <div className={styles.container}>
                   
                <div className={styles.modalContent}>
                        <button onClick={() => setIsVisibleModal(!isVisibleModal)}>close</button>
                            {children}
                       

                    
                </div>

            </div>
        }
    </>
        );
}