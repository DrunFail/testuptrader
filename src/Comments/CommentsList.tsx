import { MutableRefObject, ReactNode, ReactNodeArray, useEffect, useRef, useState } from "react";
import { COMMENTS_DATA } from "../data";
import { Comment } from "../Todo/interfaces/interfaces";
import CommentCard from "./CommentCard/CommentCard";

interface CommentListProps {
    todoId: string
    
}


export default function CommentList({ todoId }: CommentListProps) {
    
    const [commentsData, setCommentsData] = useState(COMMENTS_DATA)
    
    
    return (
        <section>
            <h1> Comments</h1>
            {commentsData.length === 0 && <p> no comments</p> }
            {commentsData.map(item => <CommentCard  item={item} key={item.id} />)}
        </section>

    );
}