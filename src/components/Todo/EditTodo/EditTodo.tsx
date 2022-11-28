import { Todo } from "../../../interfaces/interfaces";
import styles from './EditTodo.module.scss';
interface EditTodoProps {
    item: Todo
}


export default function EditTodo({ item }: EditTodoProps) {
    return (
        <section className={styles.container }>
            <h1>form editing</h1>
            <form className={styles.form}>
                <label>change title</label>
                <input value={item.title} type='text' />
                <label>change body</label>
                <textarea value={item.description }/>
                <button>apply</button>
            </form>
        </section>
        
        );
}