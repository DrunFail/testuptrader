import { useState } from "react";
import { FAKE_DATA } from "../../data/data";
import DragNDrop from "../DragNDrop/DragNDrop";
import TodoItemCard from "./TodoItemCard/TodoItemCard";
import styles from './TodoList.module.scss';

export default function TodoList() {
    const [isDragging, setIsDragging] = useState(false)

    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    return (
        <>
        <DragNDrop
                isDragging={isDragging}
                handleDragging={handleDragging}
            />
        <section className={styles.container}>
            
            <h1>Список задач</h1>
            {FAKE_DATA.map(item =>
                <TodoItemCard
                    key={item.id}
                    item={item}
                    handleDragging={handleDragging}
                />
               
            )}
        </section>
</>
    );
}