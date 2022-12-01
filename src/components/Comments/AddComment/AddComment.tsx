import { useRef, useState } from 'react';
import CustomButton from '../../../ui/buttons/CustomButton/CustomButton';
import styles from './AddComment.module.scss';

interface AddCommentProps {
    onAdd: (rootComment: string) => void,
}


export default function AddComment({onAdd }: AddCommentProps) {
    const [commentAdd, setCommentAdd] = useState(false)

    const rootCommentRef = useRef<HTMLTextAreaElement>(null)
    const onAction = () => {
        if (rootCommentRef.current) {
            onAdd(rootCommentRef.current.value)
        }
        setCommentAdd(true)
    }


    return (
        <section className={styles.container}>
            {commentAdd || <form
                className={styles.form}
                onSubmit={(e) => e.preventDefault()}>
                <h1>add Comment</h1>
                <label>enter comment</label>
                <textarea required ref={rootCommentRef} />
                <CustomButton children='submit' onClick={onAction} />
            </form>}

            {commentAdd &&  <div className={styles.success}>
                A new comment has been successfully added!
            </div>}

        </section>
    );
}