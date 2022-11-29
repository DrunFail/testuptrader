import { useState } from "react";
import { Todo } from "../../../interfaces/interfaces";
import CommentList from "../../Comments/CommentsList";
import Modal from "../../Modal/Modal";
import AddTodo from "../AddTodo/AddTodo";
import EditTodo from "../EditTodo/EditTodo";
import styles from './TodoItemCard.module.scss';

interface TodoItemCardProps {
    item: Todo,
    handleDragging: (dragging: boolean) => void,
    updateTodo: (id: number, newTododo: any) => void,
    deleteTodo: (id: number, parentId?: number) => void,
    addNewTodo: (newTodo: Todo, parentId?: number | null | undefined) => void
   
}


export default function TodoItemCard({ item, handleDragging, updateTodo, deleteTodo , addNewTodo}: TodoItemCardProps) {
    const [openTodoCard, setOpenTodoCard] = useState(false)
    
    const transferId = JSON.stringify({
        id: item.id,
        parentId: item.parentId

    })

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData(`text` , transferId)
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
                <p><span>Date created</span> {item.dateCreated.toDateString()}</p>
                <p><span>Time in work </span>{item.timeWork }</p>
                <p><span>Date completed</span> {item.dateEnd}</p>
                <p><span>files</span>  {item.files}</p>
                <Modal children=<EditTodo updateTodo={updateTodo}  item={item }/> textButton='edit' />
                <button onClick={() => deleteTodo(item.id, item.parentId) }>delete</button>

            </div>
            {openTodoCard &&
                <>
                <div className={styles.nestedTodo}>
                    <h5>mini Todo</h5>
                    <Modal textButton='add minitask' children={<AddTodo addNewTodo={addNewTodo} parentId={item.id } /> }/>
                        {item.nestedTodo.map(item =>
                            <TodoItemCard
                                key={item.id}
                                handleDragging={handleDragging}
                                item={item}
                                addNewTodo={addNewTodo}
                                deleteTodo={deleteTodo}
                                updateTodo={updateTodo }                            />)}
                    </div>
                      <CommentList /> 
                    
                </>

            }
        </>);
}