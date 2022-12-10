import moment from "moment";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Todo } from "../../../interfaces/interfaces";
import Arrow from "../../../ui/Arrow/Arrow";
import FileIcon from "../../../ui/SVGComponents/FileIcon";
import CommentList from "../../Comments/CommentsList";
import Modal from "../../Modal/Modal";
import DeleteTodo from "../DeleteTodo/DeleteTodo";
import EditTodo from "../EditTodo/EditTodo";
import NestedTodo from "../NestedTodo/NestedTodo";
import styles from './TodoItemCard.module.scss';


interface TodoItemCardProps {
    item: Todo,
    handleDragging: (dragging: boolean) => void,
}


export default function TodoItemCard({ item, handleDragging }: TodoItemCardProps) {
    const [openTodoCard, setOpenTodoCard] = useState(false);
    const width = document.documentElement.clientWidth;
    const { projectId } = useParams();
    if (!projectId) {
        throw new Error('error projectId')
    }
    const transferId = JSON.stringify({
        id: item.id,
        projectId,
        todoId: item.todoId

    })

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData(`text`, transferId)
        handleDragging(true)
    }


    const handleDragEnd = () => handleDragging(false)



    const newOnClick = () => {
        if (width < 500) {
            setOpenTodoCard(!openTodoCard)
        }
    }

    const handleOpenCard = () => {
        if (item.projectId) {
            setOpenTodoCard(openTodoCard => !openTodoCard)
        }
    }



    return (
        <>
            <div
                id={`${item.id}`}
                className={styles.container}
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onClick={newOnClick} >

                {item.projectId &&
                    <Arrow
                        stateShow={openTodoCard}
                        handler={handleOpenCard} />
                }

                <p><span>ID</span><span>{item.id}</span> </p>
                <p><span>Priority</span> {item.priority}</p>
                <p><span>Status</span> {item.currentStatus}</p>
                <p><span>Name</span>  {item.title}</p>
                <p><span>Date created</span> {moment(item.dateCreated).calendar()}</p>
                <p><span>Time in work </span>{moment(item.dateCreated).fromNow()}</p>
                <p><span>Date completed</span> {moment(item.dateEnd).calendar()}</p>

                {width < 900 || <>
                    <p className={styles.icon}><span>files</span>{item.files?.length && <FileIcon />}  </p>



                    <Modal textButton='edit' >
                        <EditTodo item={item} />
                    </Modal>

                    <Modal textButton='delete' >
                        <DeleteTodo todoId={item.id} parentTodoId={item.todoId} />
                    </Modal>
                </>
                }

            </div>
            {openTodoCard &&
                <>
                    <NestedTodo
                        handleDragging={handleDragging}
                        projectId={+projectId}
                        parentTodoId={item.id}
                    />
                    <CommentList />
                </>
            }
        </>
    );
}