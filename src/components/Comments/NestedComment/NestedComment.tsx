import styles from './NestedComment.module.scss'
import CommentCard from '../CommentCard/CommentCard';
import { MapperComment } from '../../../interfaces/interfaces';


interface NestedCommentProps {
    stateShow: boolean,
    childComments: MapperComment[],
    addNewComment: (commentValue: string, parentId?: string) => void
}


export default function NestedComment({ stateShow, childComments, addNewComment }: NestedCommentProps) {
    return (
        <div className={styles.nestedComment}>
            {stateShow &&
                childComments.map((childCommentEl, key: number) => {
                    return (
                        <CommentCard
                            key={key}
                            comment={childCommentEl}
                            addNewComment={addNewComment }
                            
                        />
                    );
                })
            }
        </div>

    );
}