import { useState } from 'react';
import styles from './DragCard.module.scss';
import { Priority } from '../../../interfaces/interfaces';

interface DragCardProps {
    elem: Priority,
    isDragging: boolean,
    handleDragging: (dragging: boolean) => void,
    changeStatus: (id: number, newStatus: Priority, parentId:number) => void
}


export default function DragCard({ elem, isDragging, handleDragging,changeStatus }: DragCardProps) {
    const [dragEnter, setDragEnter] = useState(false)

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
        const {id, parentId } = x
        changeStatus(id,elem, parentId)
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