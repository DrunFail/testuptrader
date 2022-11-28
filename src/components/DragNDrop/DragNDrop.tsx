import { BooleanLiteral } from "typescript";
import DragCard from "./DragCard/DragCard";
import styles from './DragNDrop.module.scss';

const COLUMNS: string[] = ['done', 'queue', 'development']

interface DragNDropProps {
    isDragging: boolean,
    handleDragging: (dragging: boolean) => void
}


export default function DragNDrop({isDragging, handleDragging }: DragNDropProps) {
    const getClassName = (isDragging: Boolean): string => {
        if (isDragging) {
            return 'active'
        }
        return 'container'
    }

    return (
        <div className={styles[getClassName(isDragging)] }>
            {COLUMNS.map(elem => <DragCard
                key={elem}
                elem={elem}
                isDragging={isDragging}
                handleDragging={handleDragging}

            />
                )}
        </div>
        
        );
}