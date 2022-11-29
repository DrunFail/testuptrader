import { useState } from 'react';
import CustomButton from '../../ui/buttons/CustomButton/CustomButton';
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
            <CustomButton children={textButton} onClick={() => setIsVisibleModal(!isVisibleModal) } />
        {isVisibleModal &&
                <div className={styles.container}>
                   
                <div className={styles.modalContent}>
                        <div
                            className={styles.closeButton}
                            onClick={() => setIsVisibleModal(false) }
                        >
                            <span className={styles.top }></span>
                            <span className={styles.bot }></span>
                        </div>
                            {children}
                       

                    
                </div>

            </div>
        }
    </>
        );
}