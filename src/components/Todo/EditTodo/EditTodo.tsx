import { useState } from "react";
import { Todo } from "../../../interfaces/interfaces";
import styles from './EditTodo.module.scss';


interface EditTodoProps {
    item: Todo,
    updateTodo: (id: number, newTododo: any, parentId?: any) => void
}


export default function EditTodo({ item, updateTodo }: EditTodoProps) {
    const [updatedItem, setUpdatedItem] = useState<any>({
        title: item.title,
        description: item.description,
        priority: item.priority
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateTodo(item.id, updatedItem, item.parentId)
    }


    return (
        <section className={styles.container}>
            <h1>form editing</h1>
            <form onSubmit={(e) => handleSubmit} className={styles.form}>
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