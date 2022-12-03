import { CurrentStatus } from "../../interfaces/interfaces";
import DragCard from "./DragCard/DragCard";
import styles from './DragNDrop.module.scss';


interface DragNDropProps {
    isDragging: boolean,
    handleDragging: (dragging: boolean) => void,
    changeStatus: (id: number, newStatus: CurrentStatus, parentId?: number) => void
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
            {Object.entries(CurrentStatus).map(([key, value]) => <DragCard
                key={key}
                elem={value}
                isDragging={isDragging}
                handleDragging={handleDragging}
                changeStatus={changeStatus}

            />
                )}
        </div>
        
        );
}