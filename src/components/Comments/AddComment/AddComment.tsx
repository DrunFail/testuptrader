import { useRef, useState } from 'react';
import styles from './AddComment.module.scss';


interface AddCommentProps {
    addNewComment: (commentValue: string, parentId?: string ) => void,
    parentComment?: string
}


export default function AddComment({addNewComment, parentComment }: AddCommentProps) {
    const [commentAdd, setCommentAdd] = useState(false)

    const commentRef = useRef<HTMLTextAreaElement>(null)


    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (commentRef.current !== null) { 
            addNewComment(commentRef.current.value, parentComment)
        }
    }


    return (
        <section className={styles.container}>
            {commentAdd ||
                <form
                    className={styles.form}
                    onSubmit={handleSubmit}>
                    <h1>add Comment</h1>
                    <label>enter comment</label>
                    <textarea required ref={commentRef} />
                    <button type='submit'>send</button>
                </form>}

            {commentAdd &&
                <div className={styles.success}>
                    A new comment has been successfully added!
                </div>}

        </section>
    );
}