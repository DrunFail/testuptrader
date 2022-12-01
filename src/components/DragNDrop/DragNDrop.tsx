import { Priority } from "../../interfaces/interfaces";
import DragCard from "./DragCard/DragCard";
import styles from './DragNDrop.module.scss';

const COLUMNS: string[] = ['Done', 'Queue', 'Development']

interface DragNDropProps {
    isDragging: boolean,
    handleDragging: (dragging: boolean) => void,
    changeStatus: (id: number, newStatus: Priority, parentId?: number) => void
}


export default function DragNDrop({isDragging, handleDragging, changeStatus }: DragNDropProps) {
    const getClassName = (isDragging: Boolean): string => {
        if (isDragging) {
            return 'active'
        }
        return 'container'
    }

    return (
        <div className={styles[getClassName(isDragging)] }>
            {COLUMNS.map((elem: any) => <DragCard
                key={elem}
                elem={elem}
                isDragging={isDragging}
                handleDragging={handleDragging}
                changeStatus={changeStatus}

            />
                )}
        </div>
        
        );
}