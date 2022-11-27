import { useState } from 'react';
import styles from './Modal.module.scss';


interface ModalProps {
    children: React.ReactNode,
    textButton: string
}

export default function Modal({ children, textButton }: ModalProps) {
    const [isVisibleModal, setIsVisibleModal] = useState(false)



    return (<>
        <button onClick={() => setIsVisibleModal(!isVisibleModal)}>{textButton }</button>

        {isVisibleModal &&
            <div className={styles.container}>
                <div className={styles.modalContent}>

                    {children}

                    <button onClick={() => setIsVisibleModal(!isVisibleModal) }>close</button>
                </div>

            </div>
        }
    </>
        );
}