import { useRef, useState } from 'react';
import CustomButton from '../../../ui/buttons/CustomButton/CustomButton';
import styles from './AddComment.module.scss';


interface AddCommentProps {
    addComment: (rootComment: string) => void,
}


export default function AddComment({ addComment }: AddCommentProps) {
    const [commentAdd, setCommentAdd] = useState(false)

    const rootCommentRef = useRef<HTMLTextAreaElement>(null)

    const addNewComment = () => {
        if (rootCommentRef.current) {
            addComment(rootCommentRef.current.value)
        }
        setCommentAdd(true)
    }


    return (
        <section className={styles.container}>
            {commentAdd ||
                <form
                    className={styles.form}
                    onSubmit={(e) => e.preventDefault()}>
                    <h1>add Comment</h1>
                    <label>enter comment</label>
                    <textarea required ref={rootCommentRef} />
                    <CustomButton children='submit' onClick={addNewComment} />
                </form>}

            {commentAdd &&
                <div className={styles.success}>
                    A new comment has been successfully added!
                </div>}

        </section>
    );
}