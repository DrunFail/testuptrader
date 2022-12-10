import { CurrentStatus } from "../../interfaces/interfaces";
import DragCard from "./DragCard/DragCard";
import styles from './DragNDrop.module.scss';


interface DragNDropProps {
    isDragging: boolean,
    handleDragging: (dragging: boolean) => void,
}


export default function DragNDrop({ isDragging, handleDragging }: DragNDropProps) {
    return (
        <div className={styles[isDragging ? 'active' : 'container']}>

            {Object.entries(CurrentStatus).map(([key, value]) =>
                <DragCard
                    key={key}
                    elem={value}
                    isDragging={isDragging}
                    handleDragging={handleDragging}
                />
            )}
        </div>
    );
}