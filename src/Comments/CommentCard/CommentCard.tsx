import { isVisible } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import { Comment } from "../../Todo/interfaces/interfaces";
import AddComment from "../AddComment/AddComment";

interface CommentCardProps {
    item: Comment,
}


export default function CommentCard({ item }: CommentCardProps) {
    const [isVisibleBranch, setIsVisibleBranch] = useState(false)

    let children = null
    if (item.comments.length !== 0) {
        children = (isVisibleBranch &&
            <ul>
                {item.comments.map(elem =>
                    <CommentCard  item={elem} key={elem.id} />)}
            </ul>)
    }
    


    return (
        <>
            <p>{item.value}</p>
            {item.comments.length &&
                <button
                    onClick={() => setIsVisibleBranch(!isVisibleBranch)}>
                    развернуть ветку({item.comments.length})
                </button>}
            
            <Modal textButton='ответить' children={<AddComment /> }/>
            {isVisibleBranch && children}
        </>
    );
}