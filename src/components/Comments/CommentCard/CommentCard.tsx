import { useState } from "react";
import { Comment } from "../../../interfaces/interfaces";
import styles from './CommentCard.module.scss';


interface CommentCardProps {
    comment: Comment,
    addComment: (parentNodeId: string | null, commentValue: string) => void
}


export default function CommentCard({ comment, addComment }: CommentCardProps) {
    const { commentText, childComments, id } = comment;
    const [childComment, setChildComment] = useState("");
    const [show, setShow] = useState(true);
    const [showAddComponent, setShowAddComponent] = useState(false);


    const onAdd = () => {
        addComment(id, childComment);
        setChildComment("");
        setShowAddComponent(false);
    };


    return (
        <>
            <div className={styles.container} >
                <p className={styles.commentTitle}>{commentText} </p>

                <a
                    style={{ cursor: "pointer", fontSize: "0.7rem", color: "blue" }}
                    onClick={() => setShowAddComponent(!showAddComponent)}
                >
                    Add a reply
                </a>

                {showAddComponent &&
                    <>
                        <input
                            type="text"
                            value={childComment}
                            onChange={(e) => setChildComment(e.target.value)}
                            placeholder="add comment"
                        />
                        <button onClick={onAdd}>Submit</button>
                    </>
                }

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
                    childComments.map((childCommentEl, key) => {
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
