import { useState } from 'react';
import CustomButton from '../../../ui/buttons/CustomButton/CustomButton';
import styles from './DeleteTodo.module.scss';

interface DeleteTodoProps {
    handleDelete: () => void
}


export default function DeleteTodo({ handleDelete }: DeleteTodoProps) {
    const [deleteTodo, setDeleteTodo] = useState(false);

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