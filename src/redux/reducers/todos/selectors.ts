import { RootState } from "../../store"

export const selectNestedTodos = (state: RootState) => state.todos.todos

export const newTodoId = (state: RootState) => {
    if (state.todos.todos.length) {
        return +(state.todos.todos[state.todos.todos.length - 1].id) + 1
    }
    return 1
}