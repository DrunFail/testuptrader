import { useState } from "react";
import { useParams } from "react-router-dom";
import { Todo } from "../../../interfaces/interfaces";
import { useAppDispatch } from "../../../redux/hooks/newhooks";
import { updateNestedTodo } from "../../../redux/reducers/nestedTodo/actions";
import { updateTodo } from "../../../redux/reducers/todos/actions";
import styles from './EditTodo.module.scss';


interface EditTodoProps {
    item: Todo,
}


export default function EditTodo({ item }: EditTodoProps) {
    const dispatch = useAppDispatch();
    const { projectId } = useParams();
    if (!projectId) {
        throw new Error('error projectId')
    }


    const [updatedItem, setUpdatedItem] = useState<any>({
        title: item.title,
        description: item.description,
        priority: item.priority
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (item.todoId) {
            dispatch<any>(updateNestedTodo(+projectId,item.id, item.todoId, updatedItem))
        } else {
            dispatch<any>(updateTodo(+projectId, item.id, updatedItem))
        }
        
    }

    return (
        <section className={styles.container}>
            <h1>form editing</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>change title</label>
                <input
                    onChange={(e) => setUpdatedItem({ ...updatedItem, title: e.target.value })}
                    value={updatedItem.title}
                    type='text' />


                <label>change body</label>
                <textarea
                    onChange={(e) => setUpdatedItem({ ...updatedItem, description: e.target.value })}
                    value={updatedItem.description} />

                <select onChange={(e) => setUpdatedItem({ ...updatedItem, priority: e.target.value })} value={updatedItem.priority}>
                    <option>medium</option>
                    <option>high</option>
                    <option>normal</option>
                </select>

                <button type='submit'>apply</button>
            </form>
        </section>

    );
}