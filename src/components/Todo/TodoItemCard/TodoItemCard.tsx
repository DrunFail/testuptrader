import moment from "moment";
import { useState } from "react";
import { Comment, NestedTodo, Todo } from "../../../interfaces/interfaces";
import CommentList from "../../Comments/CommentsList";
import Modal from "../../Modal/Modal";
import AddTodo from "../AddTodo/AddTodo";
import DeleteTodo from "../DeleteTodo/DeleteTodo";
import EditTodo from "../EditTodo/EditTodo";
import styles from './TodoItemCard.module.scss';

interface TodoItemCardProps {
    item: Todo | NestedTodo,
    handleDragging: (dragging: boolean) => void,
    updateTodo: (id: number, newTododo: any) => void,
    deleteTodo: (id: number, parentId?: number) => void,
    addNewTodo: (newTodo: Todo, parentId?: number | null | undefined) => void,
    up: (id: number, newComment: Comment[]) => void,
    changeStatusState: boolean
   
}


export default function TodoItemCard({ item, handleDragging, updateTodo, deleteTodo, addNewTodo, up, changeStatusState }: TodoItemCardProps) {
    const [openTodoCard, setOpenTodoCard] = useState(false)
    const width = document.documentElement.clientWidth;
    console.log(width)

    const transferId = JSON.stringify({
        id: item.id,
        parentId: item.parentId

    })

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData(`text`, transferId)
        handleDragging(true)
    }


    const handleDragEnd = () => handleDragging(false)

    const handleDelete = () => {
        deleteTodo(item.id, item.parentId)
    }

    const newOnClick = () => {
        if (width < 500) {
            setOpenTodoCard(!openTodoCard)
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
                onClick={newOnClick }
            >
                {item.nestedTodo && <div
                    className={styles[openTodoCard ? 'openArrow' : 'arrow']}
                    onClick={() => {
                        if (item.parentId) {
                            return
                        }
                        setOpenTodoCard(!openTodoCard)
                    }}
                >
                    <span className={styles.arrowLeft}></span>
                    <span className={styles.arrowRight}></span>
                </div>}
                
                <p><span>ID</span><span>{item.id}</span> </p>
                <p><span>Priority</span> {item.priority}</p>
                <p><span>Status</span> {item.currentStatus}</p>
                <p><span>Name</span>  {item.title}</p>
                <p><span>Date created</span> {moment(item.dateCreated).calendar() }</p>
                <p><span>Time in work </span>{moment(item.dateCreated).fromNow()}</p>
                <p><span>Date completed</span> {moment(item.dateEnd).calendar()}</p>
                
                {width < 900 || <>
                    <p><span>files</span>  {item.files}</p>
                 <Modal children=<EditTodo updateTodo={updateTodo}  item={item }/> textButton='edit' />
                    <Modal children={<DeleteTodo handleDelete={handleDelete} />} textButton='delete' />
                </> 
                }
               
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
                <CommentList id={item.id} up={up} commentsList={item.comments }/> 
                    
                </>

            }
        </>);
}