import { RootState } from "../../store"

export const selectTodos = (state: RootState) => state.todos

export const newTodoId = (state: RootState) => {
    if (state.todos.todos.length) {
        return +(state.todos.todos[state.todos.todos.length - 1].id) + 1
    }
    return 1
}