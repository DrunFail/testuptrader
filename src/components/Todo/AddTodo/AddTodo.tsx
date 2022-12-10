import moment from 'moment';
import { useState } from 'react';
import { CurrentStatus, PriorityStatus, Todo } from '../../../interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/newhooks';
import { addNestedTodo } from '../../../redux/reducers/nestedTodo/actions';
import { newNestedTodoId } from '../../../redux/reducers/nestedTodo/selectors';
import { addTodos } from '../../../redux/reducers/todos/actions';
import { newTodoId } from '../../../redux/reducers/todos/selectors';
import BlackButton from '../../../ui/blackButton/BlackButton';
import Modal from '../../Modal/Modal';
import Uploader from '../../Uploader/Uploader';
import styles from './AddTodo.module.scss';


interface AddTodoProps {
    projectId: number,
    todoId?: number
}

export default function AddTodo({ projectId, todoId }: AddTodoProps) {
    const [formCompleted, setFormCompleted] = useState(true);
    const [files, setFiles] = useState<File[]>([]);
    const dispatch = useAppDispatch();



   let newId = useAppSelector(todoId ? newNestedTodoId : newTodoId)
    
    

    const updateFileList = (files: FileList) => setFiles(Object.values(files))
    
    const deleteImg = (fileName: string) => setFiles(files => files.filter(file => file.name !== fileName))

    const getURlFile = files.map(file => URL.createObjectURL(file))


    

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target;
        const newTodo: Todo = {
            id: newId,
            title: form.title.value,
            description: form.body.value,
            dateCreated: moment(),
            priority: form.priority.value,
            currentStatus: CurrentStatus.Queue,
            dateEnd: null,
            files: getURlFile,
            nestedTodo: [],
            comments: {},
            timeWork: null
        }
        if (todoId) {
            dispatch<any>(addNestedTodo(projectId, todoId, { ...newTodo, todoId }))
        } else {
            dispatch<any>(addTodos(projectId, { ...newTodo, projectId }))
        }
       
        setFormCompleted(false)
        setFiles([])
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
                        <option>{PriorityStatus.High}</option>
                        <option>{PriorityStatus.Medium}</option>
                        <option>{PriorityStatus.Normal}</option>
                    </select>

                    <Modal textButton={files.length ? 'show files' : 'add files' }>
                        <Uploader
                            updateFileList={updateFileList}
                            deleteImg={deleteImg}
                            files={files }
                        />
                    </Modal>
                    {files.length > 0 && <p>добавлено {files.length} файлов</p>}
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