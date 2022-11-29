import { FormEvent, useRef } from 'react';
import { Todo } from '../../../interfaces/interfaces';
import CustomButton from '../../../ui/buttons/CustomButton/CustomButton';
import styles from './AddTodo.module.scss';


interface AddTodoProps {
    addNewTodo: (newTodo: Todo, parentId?: number) => void,
    parentId: number
}

export default function AddTodo({addNewTodo, parentId }: AddTodoProps) {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target;
        const comment:Todo = {
            title: form.title.value,
            description: form.body.value,
            dateCreated: new Date(),
            timeWork: null,
            priority: form.priority.value,
            currentStatus: 'Queue',
            parentId
        }
        addNewTodo(comment, parentId)
    }

    const todoFormDataRef = useRef(null)


    return (
        <section className={styles.container}>
            <h1>add todo form</h1>
            <form
                onSubmit={handleSubmit}
                ref={todoFormDataRef}
                className={styles.form}>

                <label htmlFor='title'>enter task name</label>
                <input id='title' name='title' type='text' />



                <label htmlFor='body'>enter description</label>
                <textarea id='body' />
                <select id='priority'>
                    <option>high</option>
                    <option>medium</option>
                    <option>normal</option>
                </select>
                <button>add files</button>
                <button type='submit'>dddddd</button>

                <CustomButton children='create' />

            </form>        </section>
    );
}