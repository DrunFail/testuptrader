import { Link } from "react-router-dom";
import Modal from "../../Modal/Modal";
import AddTodo from "../AddTodo/AddTodo";
import { Todo } from "../interfaces/interfaces";
import styles from './TodoItemCard.module.scss';

interface TodoItemCardProps {
    item: Todo
}


export default function TodoItemCard({ item }: TodoItemCardProps) {
    return (
        <div className={styles.container }>
            <p>{item.id}</p>
            <Link to={`${item.id} `}>{item.title}</Link>
            <p>{item.dateCreate}</p>
            <p>{item.priority}</p>
            <p>{item.currentStatus}</p>
            <Modal textButton='add nested task'children={<AddTodo /> }/>
        </div>
    );
}