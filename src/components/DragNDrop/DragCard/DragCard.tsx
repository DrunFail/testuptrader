import { useState } from 'react';
import styles from './DragCard.module.scss';

interface DragCardProps {
    elem: string,
    isDragging: boolean,
    handleDragging: (dragging: boolean) => void
}


export default function DragCard({ elem, isDragging, handleDragging }: DragCardProps) {
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
        const id = e.dataTransfer.getData('text')
        handleDragging(false)
    }
    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        
        setDragEnter(true)
    }
    const handleDragLeave = (e: React.DragEvent<HTMLElement>) => setDragEnter(false)


    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()



    return (
        <div
            className={styles[getClassName(isDragging, dragEnter)]}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave }
        >
            {elem}
        </div>

    );
}