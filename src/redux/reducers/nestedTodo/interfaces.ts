import { Todo } from "../../../interfaces/interfaces"

export interface NestedTodosState {
    nestedTodos: Todo[],
    loading: boolean,
    error: null | string
}




export enum NestedTodosActionTypes {
    FETCH_NESTED_TODOS = 'FETCH_NESTED_TODOS',
    FETCH_NESTED_TODOS_SUCCESS = 'FETCH_NESTED_TODOS_SUCCESS',
    FETCH_NESTED_TODOS_ERROR = 'FETCH_NESTED_TODOS_ERROR',
    ADD_NESTED_TODO = 'ADD_NESTED_TODO',
    DELETE_NESTED_TODO = 'DELETE_NESTED_TODO',
    UPDATE_NESTED_TODO = 'UPDATE_NESTED_TODO',
    CHANGE_STATUS_NESTED_TODO = 'CHANGE_STATUS_NESTED_TODO'
}


interface FetchNestedTodosAction {
    type: NestedTodosActionTypes.FETCH_NESTED_TODOS,
}

interface FetchNestedTodosSuccessAction {
    type: NestedTodosActionTypes.FETCH_NESTED_TODOS_SUCCESS,
    payload: Todo[]
}

interface FetchNestedTodosErrorAction {
    type: NestedTodosActionTypes.FETCH_NESTED_TODOS_ERROR,
    payload: string
}

interface AddNestedTodoAction {
    type: NestedTodosActionTypes.ADD_NESTED_TODO,
    payload: any
}

interface DeleteNestedTodoAction {
    type: NestedTodosActionTypes.DELETE_NESTED_TODO,
    payload: number
}

interface UpdateNestedTodoAction {
    type: NestedTodosActionTypes.UPDATE_NESTED_TODO,
    payload: any
}

interface ChangeStatusNestedTodoAction {
    type: NestedTodosActionTypes.CHANGE_STATUS_NESTED_TODO,
    payload: any
}


export type NestedTodosAction =
    FetchNestedTodosAction
    | FetchNestedTodosSuccessAction
    | FetchNestedTodosErrorAction
    | AddNestedTodoAction
    | DeleteNestedTodoAction
    | UpdateNestedTodoAction
    |ChangeStatusNestedTodoAction
