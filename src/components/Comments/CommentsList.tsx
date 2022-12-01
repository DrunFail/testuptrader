import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Comment } from "../../interfaces/interfaces";
import Modal from "../Modal/Modal";
import AddComment from "./AddComment/AddComment";
import CommentCard from "./CommentCard/CommentCard";
import styles from './CommentList.module.scss';


const getNewComment = (commentValue: string, isRootNode = false, parentNodeId: string | null) => {
    return {
        id: uuidv4(),
        commentText: commentValue,
        parentNodeId,
        isRootNode,
        childComments:[],
    };
};


interface CommentListProps {
    up: (id: number, newComment: any) => void,
    id: number,
    commentsList: Comment[]
}

interface A {
    [key: string]: any 
}

export default function CommentList({ up, id, commentsList }: CommentListProps) {
    const [comments, setComments] = useState<A>([]);
    const [rootComment, setRootComment] = useState('')
    const initialState = commentsList ? commentsList : []
    

    useEffect(() => {
        setComments(initialState)
    },[])




    useEffect(() => {
        up(id, comments)
    }, [comments])



    const addComment = (parentNodeId: string | null, commentValue: string) => {
        let newComment: any;
        if (parentNodeId) {
            newComment = getNewComment(commentValue, false, parentNodeId);
            setComments((comments) => ({
                ...comments,
                [parentNodeId]: {
                    ...[parentNodeId],
                    childComments: [...comments[parentNodeId].childComments, newComment?.id],
                },
            }));
        } else {
            newComment = getNewComment(commentValue, true, null);
        }
        setComments((comments) => ({ ...comments, [newComment?.id]: newComment }));
    };


    const commentMapper = (comment: A) => {
        return {
            ...comment,
            childComments: comment.childComments
                .map((comm: string | number) => comments[comm])
                .map((comment: A) => commentMapper(comment)),
        };
    };


    const enhancedComments = Object.values(comments)
        .filter((comment) => {
            return !comment.parentNodeId;
        })
        .map(commentMapper);


    const onAdd = (rootComment: string) => {
        addComment(null, rootComment);
        setRootComment("");
    };


    return (
        <section className={styles.container}>
            <h1 >Comments List</h1>
            {!Object.keys(comments).length && <p> there no comment</p> }
            <Modal
                textButton='add'
                children={<AddComment onAdd={onAdd} />} />

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