import { TodosAction, TodosActionTypes, TodosState } from "./interfaces"

const initialState: TodosState = {
    todos: [],
    loading: false,
    error: null
}


export function todosReducer(state = initialState, action: TodosAction): TodosState {
    switch (action.type) {
        case TodosActionTypes.FETCH_TODOS:
            return { loading: true, error: null, todos: [] }
        case TodosActionTypes.FETCH_TODOS_SUCCESS:
            return { loading: false, error: null, todos: action.payload }
        case TodosActionTypes.FETCH_TODOS_ERROR:
            return { loading: false, error: action.payload, todos: [] }
        case TodosActionTypes.ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] }
        case TodosActionTypes.DELETE_TODO:
            return { ...state, todos:[...state.todos.filter(todo => todo.id !== action.payload)] }
        case TodosActionTypes.UPDATE_TODO:
            return { ...state, todos: [...state.todos.map(todo => todo.id === action.payload.todoId ? { ...todo, ...action.payload.newItem } : todo)] }
        case TodosActionTypes.CHANGE_STATUS_TODO:
            return { ...state, todos: [...state.todos.map(todo => todo.id === action.payload.todoId ? {...todo, currentStatus: action.payload.newStatus} : todo)]}
        default:
            return state
    }
}