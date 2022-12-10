import axios from "axios"
import { Dispatch } from "redux"
import { TodosAction, TodosActionTypes } from "./interfaces"

export const fetchTodos = (projectId: number) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({ type: TodosActionTypes.FETCH_TODOS })
            const response = await axios.get(`https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/projects/${projectId}/todos`)


            dispatch({ type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data })

        } catch (error) {
            dispatch({
                type: TodosActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке задач'
            })
        }
    }
}

export const addTodos = (projectId:number, newTodo: any) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            
            await axios.post(`https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/projects/${projectId}/todos`, {
                ...newTodo
            })
            dispatch({ type: TodosActionTypes.ADD_TODO, payload: newTodo })
        } catch (error) {
            throw new Error('ошибка добавления новой задачи')
        }
    }
}

export const deleteTodos = (projectId: number, todoId: number) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            await axios.delete(`https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/projects/${projectId}/todos/${todoId}`)
            dispatch({ type: TodosActionTypes.DELETE_TODO, payload: todoId })
        } catch (error) {
            throw new Error('ошибка удаления задачи')
        }
    }
}

export const updateTodo = (projectId: number, todoId: number, newItem:any) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            await axios.put(`https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/projects/${projectId}/todos/${todoId}`, {
                ...newItem
            })
            dispatch({ type: TodosActionTypes.UPDATE_TODO, payload: { newItem, todoId, projectId } })
        } catch (error) {
            throw new Error('ошибка обновления задачи')
        }
    }
}


export const changeStatusTodo = (projectId: number, todoId: number, newStatus: any) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            await axios.put(`https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/projects/${projectId}/todos/${todoId}`, {
                currentStatus: newStatus
            })
            dispatch({ type: TodosActionTypes.CHANGE_STATUS_TODO, payload: {newStatus,todoId}})
        } catch (error){
            throw new Error('ошибка обновления статуса')
        }
    }
}