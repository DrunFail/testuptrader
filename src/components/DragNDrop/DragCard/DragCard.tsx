import { useState } from 'react';
import styles from './DragCard.module.scss';
import { CurrentStatus } from '../../../interfaces/interfaces';
import { changeStatusNestedTodo } from '../../../redux/reducers/nestedTodo/actions';
import { useAppDispatch } from '../../../redux/hooks/newhooks';
import { changeStatusTodo } from '../../../redux/reducers/todos/actions';

interface DragCardProps {
    elem: CurrentStatus,
    isDragging: boolean,
    handleDragging: (dragging: boolean) => void,
}


export default function DragCard({ elem, isDragging, handleDragging }: DragCardProps) {
    const [dragEnter, setDragEnter] = useState(false)

    const dispatch = useAppDispatch()


    const getClassName = (isDragging: boolean, dragEnter: boolean) => {
        if (dragEnter) {
            return 'enter'
        }

        if (isDragging) {
            return 'drag'
        }
        return 'container'
    }
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const getId = e.dataTransfer.getData('text')
        const x = JSON.parse(getId)
        const {projectId,todoId, id } = x
        if (todoId) {
            dispatch<any>(changeStatusNestedTodo(projectId, id, todoId, elem))
        } else {
            dispatch<any>(changeStatusTodo(projectId, id, elem))
        }
        handleDragging(false)
    }
    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {

        setDragEnter(true)
    }
    const handleDragLeave = (e: React.DragEvent<HTMLElement>) => setDragEnter(false)


    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()



    return (
        <>
            {isDragging &&
                <div
                    className={styles[getClassName(isDragging, dragEnter)]}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                >
                    {`${elem}`}
                </div>
            }
        </>

    );
}