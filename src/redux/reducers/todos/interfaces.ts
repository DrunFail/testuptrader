import { Todo } from "../../../interfaces/interfaces"

export interface TodosState {
    todos: Todo[],
    loading: boolean,
    error: null | string
}




export enum TodosActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    UPDATE_TODO = 'UPDATE_TODO',
    CHANGE_STATUS_TODO = 'CHANGE_STATUS_TODO'
}


interface FetchTodosAction {
    type: TodosActionTypes.FETCH_TODOS,
}

interface FetchTodosSuccessAction {
    type: TodosActionTypes.FETCH_TODOS_SUCCESS,
    payload: Todo[]
}

interface FetchTodosErrorAction {
    type: TodosActionTypes.FETCH_TODOS_ERROR,
    payload: string
}

interface AddTodoAction {
    type: TodosActionTypes.ADD_TODO,
    payload: any
}

interface DeleteTodoAction {
    type: TodosActionTypes.DELETE_TODO,
    payload: number
}

interface UpdateTodoAction {
    type: TodosActionTypes.UPDATE_TODO,
    payload: any
}

interface ChangeStatusTodoAction {
    type: TodosActionTypes.CHANGE_STATUS_TODO,
    payload: any
}


export type TodosAction =
    FetchTodosAction
    | FetchTodosSuccessAction
    | FetchTodosErrorAction
    | AddTodoAction
    | DeleteTodoAction
    | UpdateTodoAction
    |ChangeStatusTodoAction
