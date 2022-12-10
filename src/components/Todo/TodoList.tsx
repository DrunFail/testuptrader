import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  Todo } from "../../interfaces/interfaces";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/newhooks";
import { fetchTodos } from "../../redux/reducers/todos/actions";
import DragNDrop from "../DragNDrop/DragNDrop";
import Modal from "../Modal/Modal";
import Search from "../Search/Search";
import AddTodo from "./AddTodo/AddTodo";
import TodoItemCard from "./TodoItemCard/TodoItemCard";
import styles from './TodoList.module.scss';

export default function TodoList() {
    const [dataSearch, setDataSearch] = useState('')
    const [isDragging, setIsDragging] = useState(false)

    const { todos, error, loading } = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()

    const { projectId } = useParams();
    if (!projectId) {
        throw new Error('failed to get id project')
    }


    useEffect(() => {
        dispatch<any>(fetchTodos(+projectId))
    }, [])




    let newId: number = 1;

    if (todos.length) {
        newId = +todos[todos.length - 1].id + 1
    }


    let filteredTodo: Todo[] = []


    const searchItem = (arr: Todo[]) => {
        if (dataSearch) {
            if (+dataSearch) {
                arr.map((elem: Todo) => {
                    if (elem.id == +dataSearch) {
                        filteredTodo.push(elem)
                    }
                    if (elem.nestedTodo.length) {
                        return searchItem(elem.nestedTodo)
                    }
                })
            }
            else {
                arr.map((elem: Todo) => {
                    if (elem.title.toLowerCase().includes(dataSearch.toLowerCase())) {
                        filteredTodo.push(elem)
                    }
                    if (elem.nestedTodo.length) {
                        return searchItem(elem.nestedTodo)
                    }
                })
            }
        } else {
            filteredTodo = arr
        }
    }


    const handleDragging = (dragging: boolean) => setIsDragging(dragging)


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataSearch(e.target.value)
    }


    return (
        <>
            <DragNDrop
                isDragging={isDragging}
                handleDragging={handleDragging}

            />

            <section className={styles.container}>
                <h1>Список задач</h1>

                <Modal textButton='add task'>
                    <AddTodo projectId={+projectId} />
                </Modal>

                <Search dataSearch={dataSearch} handleSearch={handleSearch} />

                {todos.map(item =>
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