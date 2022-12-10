import { useState } from "react";
import { MapperComment } from "../../../interfaces/interfaces";
import Arrow from "../../../ui/Arrow/Arrow";
import Modal from "../../Modal/Modal";
import AddComment from "../AddComment/AddComment";
import NestedComment from "../NestedComment/NestedComment";
import styles from './CommentCard.module.scss';


interface CommentCardProps {
    comment: MapperComment,
    addNewComment: any
}


export default function CommentCard({ comment, addNewComment }: CommentCardProps) {
    const [showNestedComment, setShowNestedComment] = useState(true);

    const { commentText, childComments, id } = comment;

    const handleShowNestedComment = () => {
        setShowNestedComment(showNestedComment => !showNestedComment)
    }


    return (
        <>
            <div className={styles.container} >
                <p className={styles.commentTitle}>{commentText} </p>

                <Modal textButton='add reply'>
                    <AddComment parentComment={comment.id} addNewComment={addNewComment } />
                </Modal>

                {childComments.length > 0 &&
                    <Arrow
                        stateShow={showNestedComment}
                        handler={handleShowNestedComment}
                    />
                }
            </div>

            {comment.childComments.length > 0 &&
                <NestedComment
                    stateShow={showNestedComment}
                childComments={childComments}
                addNewComment={addNewComment}
                    
                />
            }
        </>
    );
};
