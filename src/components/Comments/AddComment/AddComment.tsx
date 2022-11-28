import { useRef } from 'react';
import CustomButton from '../../../ui/buttons/CustomButton/CustomButton';
import styles from './AddComment.module.scss';

interface AddCommentProps {
    onAdd: (rootComment: string) => void,
}


export default function AddComment({onAdd }: AddCommentProps) {
    const rootCommentRef = useRef(null)
    const onAction = () => {
        if (rootCommentRef.current) {
            onAdd(rootCommentRef.current.value)
        }
    }


    return (
        <section className={styles.container}>
            <form
                className={styles.form }
                onSubmit={(e) => e.preventDefault()}>
                <h1>add Comment</h1>
                <label>enter comment</label>
                <textarea ref={rootCommentRef }/>
                <CustomButton children='submit' onClick={onAction } />
            </form>
        </section>
    );
}