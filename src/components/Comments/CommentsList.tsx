import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Comment, MapperComment, WrapperComment } from "../../interfaces/interfaces";
import Modal from "../Modal/Modal";
import AddComment from "./AddComment/AddComment";
import CommentCard from "./CommentCard/CommentCard";
import styles from './CommentList.module.scss';


const getNewComment = (commentValue: string, isRootNode = false, parentNodeId: string | null): Comment => {
    return {
        id: uuidv4(),
        commentText: commentValue,
        parentNodeId,
        isRootNode,
        childComments: [],
    };
};


interface CommentListProps {
    updateTodoList: (id: number, newComment: WrapperComment) => void,
    id: number,
    commentsList: WrapperComment
}



export default function CommentList({ updateTodoList, id, commentsList }: CommentListProps) {
    const [comments, setComments] = useState<WrapperComment>({});
    const initialState = commentsList ? commentsList : {}


    useEffect(() => {
        setComments(initialState)
    }, [])


    useEffect(() => {
        updateTodoList(id, comments)
    }, [comments])


    const addComment = (parentNodeId: string | null, commentValue: string) => {
        let newComment: Comment;
        if (parentNodeId) {
            newComment = getNewComment(commentValue, false, parentNodeId);
            setComments((comments) => ({
                ...comments,
                [parentNodeId]: {
                    ...comments[parentNodeId],
                    childComments: [...comments[parentNodeId].childComments, newComment.id],
                },
            }));
        } else {
            newComment = getNewComment(commentValue, true, null);
        }
        setComments((comments) => ({ ...comments, [newComment.id]: newComment }));
    };


    const commentMapper = (comment: Comment): MapperComment => {
        return {
            ...comment,
            childComments: comment.childComments
                .map((comm) => comments[comm])                // rewrite field 'childComments'  string => Comment
                .map((comment) => commentMapper(comment)),    // repeat for each comment in 'childComments'
        };
    };


    const enhancedComments = Object.values(comments) //get all comments from state
        .filter((comment) => {
            return !comment.parentNodeId;  //filter and get array all parent comments
        })
        .map(commentMapper);


    const addParentComment = (rootComment: string) => {
        addComment(null, rootComment);
    };


    return (
        <section className={styles.container}>
            <h1 >Comments List</h1>
            {!Object.keys(comments).length && <p> there no comment</p>}

            <Modal textButton='add'>
                <AddComment addComment={addParentComment} />
            </Modal>

            <section className={styles.commentList}>
                {enhancedComments.map((comment, id) => {
                    return (
                        <CommentCard
                            key={id}
                            comment={comment}
                            addComment={addComment} />
                    );
                })}
            </section>
        </section>
    );
}