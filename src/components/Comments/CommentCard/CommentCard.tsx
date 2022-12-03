import { useState } from "react";
import { MapperComment } from "../../../interfaces/interfaces";
import Arrow from "../../../ui/Arrow/Arrow";
import Modal from "../../Modal/Modal";
import AddComment from "../AddComment/AddComment";
import NestedComment from "../NestedComment/NestedComment";
import styles from './CommentCard.module.scss';


interface CommentCardProps {
    comment: MapperComment,
    addComment: (parentNodeId: string | null, commentValue: string) => void
}


export default function CommentCard({ comment, addComment }: CommentCardProps) {
    const [showNestedComment, setShowNestedComment] = useState(true);

    const { commentText, childComments, id } = comment;

    const handleShowNestedComment = () => {
        setShowNestedComment(showNestedComment => !showNestedComment)
    }

    const addNestedComment = (childComment: string) => {
        addComment(id, childComment);
    };


    return (
        <>
            <div className={styles.container} >
                <p className={styles.commentTitle}>{commentText} </p>

                <Modal textButton='add reply'>
                    <AddComment addComment={addNestedComment} />
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
                    addComment={addComment}
                />
            }
        </>
    );
};
