import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment, NestedTodo, Priority, Projects, Todo} from "../../interfaces/interfaces";
import DragNDrop from "../DragNDrop/DragNDrop";
import Modal from "../Modal/Modal";
import Search from "../Search/Search";
import AddTodo from "./AddTodo/AddTodo";
import TodoItemCard from "./TodoItemCard/TodoItemCard";
import styles from './TodoList.module.scss';

export default function TodoList() {
    const [dataSearch, setDataSearch] = useState('')
    const [dataTodoList, setDataTodoList] = useState<Todo[]>([])


    let filteredTodo: Todo[] | NestedTodo[]  = []


    const searchItem = (arr: any) => {
        if (dataSearch) {
            if (+dataSearch) {
                arr.map((elem: Todo) => {
                    if (elem.id == +dataSearch) {
                        filteredTodo.push(elem)
                    }
                    if (elem.nestedTodo?.length) {
                        return searchItem(elem.nestedTodo)
                    }
                })
            }
            else {
                arr.map((elem: Todo) => {
                    if (elem.title.toLowerCase().includes(dataSearch.toLowerCase())) {
                        filteredTodo.push(elem)
                    }
                    if (elem.nestedTodo?.length) {
                        return searchItem(elem.nestedTodo)
                    }
                })
                }
        } else {
            filteredTodo = arr
        }
    }

    searchItem(dataTodoList)

    const { projectId } = useParams();
    if (!projectId) {
        throw new Error('failed to get id project')
    }

    const newLocal = localStorage.getItem('projects')
    if (newLocal == null) {
        throw new Error('failed local storage')
    }
    const state: Projects[] = JSON.parse(newLocal)

    const getProject = state.find(item => item.id === +projectId)
    if (getProject === undefined) {
        throw new Error('')
    }


    useEffect(() => {
        setDataTodoList(getProject.tasks)
    }, [])

    const updateProjects = (projectId: number, newTasks: Todo[]) => {
        const projectsJSON = localStorage.getItem('projects')
        if (projectsJSON === null) {
            throw new Error('')
        }
        const projects: Projects[] = JSON.parse(projectsJSON);
        const newProjects = projects.map(project =>
            project.id === projectId ? { ...project, tasks: [...newTasks] } : project)
        localStorage.setItem('projects', JSON.stringify(newProjects))
    }


    const up = (id: number, newComment:any) => {
        setDataTodoList(dataTodoList.map(todo => todo.id === id ? { ...todo, comments: newComment } : todo))
    }



    useEffect(() => {
        updateProjects(+projectId, dataTodoList)
    }, [dataTodoList])





    const [isDragging, setIsDragging] = useState(false)


    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    const addNewTodo = (newTodo: Todo, parentId?: number) => {
        const newTodoTodo = {
            ...newTodo,
            id: dataTodoList[dataTodoList.length - 1]?.id + 1 || 1,
            nestedTodo: []

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
    const deleteTodo = async (id: number, parentId?: number) => {
        if (parentId) {
            setDataTodoList(dataTodoList.map(elem => elem.id === parentId ?
                { ...elem, nestedTodo: [...elem.nestedTodo.filter(elem => elem.id !== id)] } : elem
            ))
        } else {
            setDataTodoList(dataTodoList.filter(todo => todo.id !== id))
        }
    }

    const changeStatus = (id: number, newStatus: any, parentId?: number) => {
        const date = moment();
        if (parentId && newStatus == 'Done') {
            setDataTodoList(dataTodoList.map(todo => todo.id === parentId ? {
                ...todo, nestedTodo: [...todo.nestedTodo.map(nestedTodo => nestedTodo.id === id ? {
                    ...nestedTodo,   currentStatus: newStatus, dateEnd: date 

                } : nestedTodo)]
            } : todo))
        }
        if (parentId) {
            setDataTodoList(dataTodoList.map(todo => todo.id === parentId ? { ...todo, nestedTodo: [...todo.nestedTodo.map(nestedTodo => nestedTodo.id === id ? { ...nestedTodo, currentStatus: newStatus } : nestedTodo)] } : todo))
        } else {
            setDataTodoList(dataTodoList.map(todo => todo.id === id ? {...todo, currentStatus: newStatus, dateEnd: date} : todo))
        }
    }
    
    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            setDataSearch(e.target.value)
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
            <Search dataSearch={dataSearch} handleSearch={handleSearch } />


            {filteredTodo.map(item =>
                <TodoItemCard
                    key={item.id}
                    item={item}
                    handleDragging={handleDragging}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    addNewTodo={addNewTodo}
                    up={up}

                />

            )}
        </section>
    </>
);
}