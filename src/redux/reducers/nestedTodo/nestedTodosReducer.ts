import { NestedTodosAction, NestedTodosActionTypes, NestedTodosState } from "./interfaces"

const initialState: NestedTodosState = {
    nestedTodos: [],
    loading: false,
    error: null
}


export function nestedTodosReducer(state = initialState, action: NestedTodosAction): NestedTodosState {
    switch (action.type) {
        case NestedTodosActionTypes.FETCH_NESTED_TODOS:
            return { loading: true, error: null, nestedTodos: [] }
        case NestedTodosActionTypes.FETCH_NESTED_TODOS_SUCCESS:
            return { loading: false, error: null, nestedTodos: action.payload }
        case NestedTodosActionTypes.FETCH_NESTED_TODOS_ERROR:
            return { loading: false, error: action.payload, nestedTodos: [] }
        case NestedTodosActionTypes.ADD_NESTED_TODO:
            return { ...state, nestedTodos: [...state.nestedTodos, action.payload] }
        case NestedTodosActionTypes.DELETE_NESTED_TODO:
            return { ...state, nestedTodos:[...state.nestedTodos.filter(todo => todo.id !== action.payload)] }
        case NestedTodosActionTypes.UPDATE_NESTED_TODO:
            return { ...state, nestedTodos: [...state.nestedTodos.map(todo => todo.id === action.payload.todoId ? { ...todo, ...action.payload.newItem } : todo)] }
        case NestedTodosActionTypes.CHANGE_STATUS_NESTED_TODO:
            return { ...state, nestedTodos: [...state.nestedTodos.map(todo => todo.id === action.payload.todoId ? {...todo, currentStatus: action.payload.newStatus}  : todo)]}
        default:
            return state
    }
}