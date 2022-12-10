import axios from "axios"
import { Dispatch } from "redux"
import { NestedTodosAction, NestedTodosActionTypes } from "./interfaces"


export const fetchNestedTodos = (projectId: number, todoId: number) => {
    return async (dispatch: Dispatch<NestedTodosAction>) => {
        try {
            dispatch({ type: NestedTodosActionTypes.FETCH_NESTED_TODOS })
            const response = await axios.get(`https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/projects/${projectId}/todos/${todoId}/nestedTodo`)
            dispatch({ type: NestedTodosActionTypes.FETCH_NESTED_TODOS_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({
                type: NestedTodosActionTypes.FETCH_NESTED_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке подзадач'
            })
        }
    }
}


export const addNestedTodo = (projectId: number, todoId: number, newTodos: any) => {
    return async (dispatch: Dispatch<NestedTodosAction>) => {
        try {
            
            await axios.post(`https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/projects/${projectId}/todos/${todoId}/nestedTodo`, {
                ...newTodos
            })
            dispatch({ type: NestedTodosActionTypes.ADD_NESTED_TODO, payload: newTodos })
        } catch (error) {
            throw new Error('ошибка добавления новой задачи')
        }
    }
}


export const deleteNestedTodo = (projectId: number, todoId: number, parentTodoId:number) => {
    return async (dispatch: Dispatch<NestedTodosAction>) => {
        try {
            await axios.delete(`https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/projects/${projectId}/todos/${parentTodoId}/nestedTodo/${todoId}`)
            dispatch({ type: NestedTodosActionTypes.DELETE_NESTED_TODO, payload: todoId })
        } catch (error) {
            throw new Error('ошибка удаления задачи')
        }
    }
}


export const updateNestedTodo = (projectId: number, todoId: number, parentTodoId: number, newItem:any) => {
    return async (dispatch: Dispatch<NestedTodosAction>) => {
        try {
            await axios.put(`https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/projects/${projectId}/todos/${parentTodoId}/nestedTodo/${todoId}`, {
                ...newItem
            })
            dispatch({ type: NestedTodosActionTypes.UPDATE_NESTED_TODO, payload: { newItem, todoId } })
        } catch (error) {
            throw new Error('ошибка обновления задачи')
        }
    }
}

export const changeStatusNestedTodo = (projectId: number, todoId: number, parentTodoId: number, newStatus: any) => {
    return async (dispatch: Dispatch<NestedTodosAction>) => {
        try {
            await axios.put(`https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/projects/${projectId}/todos/${parentTodoId}/nestedTodo/${todoId}`, {
                currentStatus: newStatus
            })
            dispatch({ type: NestedTodosActionTypes.CHANGE_STATUS_NESTED_TODO, payload: { newStatus, todoId } })
        } catch (error) {
            throw new Error('ошибка изменения статуса')
        }
    }
}