import moment from 'moment';
import { useState } from 'react';
import { CurrentStatus, Todo } from '../../../interfaces/interfaces';
import BlackButton from '../../../ui/blackButton/BlackButton';
import styles from './AddTodo.module.scss';


interface AddTodoProps {
    addNewTodo: (newTodo: Todo, parentId?: number) => void,
    parentId?: number
}

export default function AddTodo({ addNewTodo, parentId }: AddTodoProps) {
    const [formCompleted, setFormCompleted] = useState(true)

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target;
        const newTodo:any = {
            title: form.title.value,
            description: form.body.value,
            dateCreated: moment(),
            priority: form.priority.value,
            currentStatus: CurrentStatus.Queue,
            dateEnd: null,
            parentId: null,
            files: null,
            nestedTodo: [],
            comments: {}
        }
        addNewTodo(newTodo, parentId)
        setFormCompleted(false)
    }

    return (
        <section className={styles.container}>
            {formCompleted &&
                <>
                    <h1>add todo form</h1>
                    <form
                        onSubmit={handleSubmit}
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
                        <BlackButton
                            onClick={() => setFormCompleted(true)}
                            type='submit'
                            children='create' />
                    </form>
                </>
            }
            {formCompleted || <div className={styles.success}>
                A new task has been successfully added!
            </div>}


        </section>
    );
}