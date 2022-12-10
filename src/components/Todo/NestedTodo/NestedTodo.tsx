import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/newhooks';
import { fetchNestedTodos } from '../../../redux/reducers/nestedTodo/actions';
import Modal from '../../Modal/Modal';
import AddTodo from '../AddTodo/AddTodo';
import TodoItemCard from '../TodoItemCard/TodoItemCard';
import styles from './NestedTodo.module.scss'

interface NestedTodoProps {
    handleDragging: (dragging: boolean) => void,
    projectId: number,
    parentTodoId: number
}

export default function NestedTodo({ handleDragging, projectId, parentTodoId }: NestedTodoProps) {
    const dispatch = useAppDispatch();
    const nestedTodos = useAppSelector(state => state.nestedTodos.nestedTodos)



    useEffect(() => {
        dispatch<any>(fetchNestedTodos(projectId, parentTodoId))
    }, [])





    return (
        <div className={styles.nestedTodo}>
            <h5>mini Todo</h5>
            <Modal textButton='add minitask' children={<AddTodo projectId={projectId} todoId={parentTodoId } />} />
            {nestedTodos.map((item) =>
                <TodoItemCard
                    key={item.id}
                    handleDragging={handleDragging}
                    item={item}
                />)}
        </div>
        
        );
}