import { useState } from "react";
import { FAKE_DATA } from "../../data/data";
import { Todo } from "../../interfaces/interfaces";
import AddComment from "../Comments/AddComment/AddComment";
import DragNDrop from "../DragNDrop/DragNDrop";
import Modal from "../Modal/Modal";
import AddTodo from "./AddTodo/AddTodo";
import TodoItemCard from "./TodoItemCard/TodoItemCard";
import styles from './TodoList.module.scss';

export default function TodoList() {
    const [dataTodoList, setDataTodoList] = useState<Todo[] | []>([])
    const [isDragging, setIsDragging] = useState(false)

    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    const addNewTodo = (newTodo: Todo, parentId?: number) => {
        const newTodoTodo = {
            ...newTodo,
            id: dataTodoList[dataTodoList.length - 1]?.id + 1 || 1,
            nestedTodo:[]
            
        }


        if (parentId) {
            setDataTodoList(dataTodoList.map(elem => elem.id === parentId ?
                { ...elem, nestedTodo: [...elem.nestedTodo, newTodoTodo] } : elem
            ))
        } else {
            setDataTodoList([...dataTodoList, newTodoTodo])
        }
        
        
    }

    const updateTodo = (id: number, newTododo: any, parentId?: number) => {
        if (parentId) {
            setDataTodoList(dataTodoList.map(elem => elem.id === parentId ?
                {
                    ...elem, nestedTodo: [...elem.nestedTodo
                        .map(item => item.id === id ? { ...item, ...newTododo } : item)]
                } : elem
                ))
        } else {
            setDataTodoList(dataTodoList.map(todo => todo.id === id ? { ...todo, ...newTododo } : todo))
        }
       
    }
    const deleteTodo = (id: number, parentId?: number) => {
        if (parentId) {
            setDataTodoList(dataTodoList.map(elem => elem.id === parentId ?
                { ...elem, nestedTodo: [...elem.nestedTodo.filter(elem => elem.id !== id)] } : elem
            ))
        } else {
            setDataTodoList(dataTodoList.filter(todo => todo.id !== id))
        }
       
    }

    const changeStatus = (id: number, newStatus: 'Queue' | 'Development' | 'Done', parentId?: number) => {
        if (parentId) {
            setDataTodoList(dataTodoList.map(todo => todo.id === parentId ?
                { ...todo, nestedTodo: [...todo.nestedTodo.map(elem => elem.id === id ? {...elem, currentStatus: newStatus} : elem)] } : todo
                ))
        } else {
            setDataTodoList(dataTodoList.map(todo => todo.id === id ? { ...todo, currentStatus: newStatus } : todo))
        }
       
    }

    






        return (
        <>
            <DragNDrop
                isDragging={isDragging}
                    handleDragging={handleDragging}
                    changeStatus={changeStatus}
            />
            <section className={styles.container}>

                <h1>Список задач</h1>
                    <Modal children={<AddTodo addNewTodo={addNewTodo} />} textButton='add task' />
                {dataTodoList.map(item =>
                    <TodoItemCard
                        key={item.id}
                        item={item}
                        handleDragging={handleDragging}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                        addNewTodo={addNewTodo }
                        
                    />

                )}
            </section>
        </>
    );
 }