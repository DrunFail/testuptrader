import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Comment, MapperComment, WrapperComment } from "../../interfaces/interfaces";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/newhooks";
import { addComment, fetchComments } from "../../redux/reducers/comments/actions";
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


export default function CommentList() {
    const dispatch = useAppDispatch();

    const { projectId } = useParams();
    if (!projectId) {
        throw new Error('error')
    }


    useEffect(() => {
        dispatch<any>(fetchComments(+projectId))
    }, [])


    const { comments, loading, error } = useAppSelector(state => state.comments)

    const addNewComment = (commentValue: string, parentNodeId?: string ) => {
        let newComment: Comment;
        let combineComment
        if (parentNodeId) {
            newComment = getNewComment(commentValue, false, parentNodeId);
            combineComment = {
                ...comments,
                ...{ [newComment.id]: newComment },
                [parentNodeId]: {
                    ...comments[parentNodeId],
                    childComments: [...comments[parentNodeId].childComments, newComment.id]
                }
            }
           
        } else {
            newComment = getNewComment(commentValue, true, null);
            combineComment = { ...comments, ...{[newComment.id]: newComment}}
        }
         
         dispatch<any>(addComment(combineComment))
        
        
    }

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



    return (
        <section className={styles.container}>
            <h1 >Comments List</h1>
            {!Object.keys(comments).length && <p> there no comment</p>}

            <Modal textButton='add'>
                <AddComment addNewComment={addNewComment} />
            </Modal>

            <section className={styles.commentList}>
                {enhancedComments.map((comment, id) => {
                    return (
                        <CommentCard
                            key={id}
                            comment={comment}
                            addNewComment={addNewComment}
                             />
                    );
                })}
            </section>
        </section>
    );
}