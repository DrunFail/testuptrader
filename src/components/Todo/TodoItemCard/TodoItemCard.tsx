import Modal from "../../Modal/Modal";
import AddTodo from "../AddTodo/AddTodo";
import { Todo } from "../../../interfaces/interfaces";
import styles from './TodoItemCard.module.scss';
import EditTodo from "../EditTodo/EditTodo";
import { useState } from "react";
import CommentList from "../../Comments/CommentsList";

interface TodoItemCardProps {
    item: Todo,
    handleDragging: (dragging: boolean) => void
}


export default function TodoItemCard({ item, handleDragging }: TodoItemCardProps) {
    const [openTodoCard, setOpenTodoCard] = useState(false)
    


    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', `${item.id}`)
        handleDragging(true)
    }


    const handleDragEnd = () => handleDragging(false)


    return (
        <>
            <div onClick={() => setOpenTodoCard(!openTodoCard)}
                id={`${item.id}`}
                className={styles.container}
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}

            >
                <p><span>ID</span><span>{item.id}</span> </p>
                <p><span>Priority</span> {item.priority}</p>
                <p><span>Status</span> {item.currentStatus}</p>
                <p><span>Name</span>  {item.title}</p>
                <p><span>Date created</span> {item.dateCreate}</p>
                <p><span>Time in work </span>{item.timeWork }</p>
                <p><span>Date completed</span> {item.dateEnd}</p>
                <p><span>files</span>  {item.files }</p>
            {/*    <Modal textButton='редактировать' children={<EditTodo item={item} />} />*/}
            {/*    <Modal textButton='добавить подзадачу' children={<AddTodo />} />*/}
            </div>
            {openTodoCard &&
                <>
                <div className={styles.nestedTodo}>
                        <h5>mini Todo</h5>
                        {item.nestedTodo.map(item =>
                            <TodoItemCard
                                key={item.id}
                                handleDragging={handleDragging}
                                item={item} />)}
                    </div>
                      <CommentList /> 
                    
                </>

            }
        </>);
}