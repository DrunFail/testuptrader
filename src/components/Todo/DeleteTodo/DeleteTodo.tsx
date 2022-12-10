import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks/newhooks';
import { deleteNestedTodo } from '../../../redux/reducers/nestedTodo/actions';
import { deleteTodos } from '../../../redux/reducers/todos/actions';
import CustomButton from '../../../ui/buttons/CustomButton/CustomButton';
import styles from './DeleteTodo.module.scss';

interface DeleteTodoProps {
    todoId: number,
    parentTodoId?: number
}


export default function DeleteTodo({ todoId, parentTodoId }: DeleteTodoProps) {
    const [deleteTodo, setDeleteTodo] = useState(false);
    const dispatch = useAppDispatch();

    const { projectId } = useParams();
    if (!projectId) {
        throw new Error('error projectId')
    }
    const handleDelete = () => {
        if (parentTodoId) {
            dispatch<any>(deleteNestedTodo(+projectId,todoId, parentTodoId))
        } else {
            dispatch<any>(deleteTodos(+projectId, todoId))
        }
    }



    return (
        <div className={styles.alert}>
            {deleteTodo || <>

                <h1>do you really want to delete this item</h1>
                <div className={styles.buttons}>
                    <CustomButton onClick={handleDelete} children='yes' />
                    <CustomButton onClick={() => setDeleteTodo(true) } children='no' />
                </div>
            </>
            }
            {deleteTodo && <h1>Deletion canceled</h1> }
        </div>

    );
}