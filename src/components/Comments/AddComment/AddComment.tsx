import { useRef } from 'react';
import styles from './AddComment.module.scss';

interface AddCommentProps {
    onAdd: (rootComment: string) => void
}


export default function AddComment({onAdd }: AddCommentProps) {
    const rootCommentRef = useRef(null)


    return (
        <section className={styles.container}>
            <form onSubmit={(e) => e.preventDefault() }>
                <h1>add Commment</h1>
                <label>enter comment</label>
                <textarea ref={rootCommentRef }/>
                <button onClick={() => {
                    if (rootCommentRef.current) {
                        onAdd(rootCommentRef.current.value)
                    }
                    
                }}>send</button>
            </form>
        </section>
    );
}