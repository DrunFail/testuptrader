import { Link } from "react-router-dom";
import Modal from "../../Modal/Modal";
import AddTodo from "../AddTodo/AddTodo";
import { Todo } from "../../../interfaces/interfaces";
import styles from './TodoItemCard.module.scss';

interface TodoItemCardProps {
    item: Todo,
    handleDragging: (dragging: boolean) => void
}


export default function TodoItemCard({ item, handleDragging }: TodoItemCardProps) {

    
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', `${item.id}`)
        handleDragging(true)
    }

    
    const handleDragEnd = () => handleDragging(false)


    return (
        <div
            id={`${item.id}`}
            className={styles.container}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd }
            
        >
            <p>Номер задачи: {item.id}</p>
            <Link to={`${item.id} `}>{item.title}</Link>
            <p>{item.dateCreate}</p>
            <p>{item.priority}</p>
            <p>{item.currentStatus}</p>
            <Modal textButton='добавить подзадачу'children={<AddTodo /> }/>
        </div>
    );
}