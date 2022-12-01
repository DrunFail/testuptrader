import { useState } from "react";
import { Comment } from "../../../interfaces/interfaces";
import Modal from "../../Modal/Modal";
import AddComment from "../AddComment/AddComment";
import styles from './CommentCard.module.scss';


interface CommentCardProps {
    comment:any,
    addComment: (parentNodeId: string | null, commentValue: string) => void
}


export default function CommentCard({ comment, addComment }: CommentCardProps) {
    const { commentText, childComments, id } = comment;
    const [show, setShow] = useState(true);


    const onAddNested = (childComment: string) => {
        addComment(id, childComment);
    };


    return (
        <>
            <div className={styles.container} >
                <p className={styles.commentTitle}>{commentText} </p>

                <Modal textButton='add reply' children={<AddComment onAdd={onAddNested }/> }/>

                {childComments.length > 0 && 
                    <div
                        className={styles[show ? 'openArrow' : 'arrow']}
                        onClick={() => setShow((show) => !show)}
                    >
                        <span className={styles.arrowLeft }></span>
                        <span className={styles.arrowRight }></span>
                    </div>
                }


            </div>
            {comment.childComments.length > 0 && <div className={styles.nestedComment} style={{ marginLeft: '10px' }}>
                {show &&
                    childComments.map((childCommentEl:string[], key: number) => {
                        return (
                            <CommentCard
                                key={key}
                                comment={childCommentEl}
                                addComment={addComment}
                            />
                        );
                    })
                }
            </div>}

        </>
    );
};
