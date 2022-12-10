import { RootState } from "../../store"

export const selectNestedTodos = (state: RootState) => state.nestedTodos

export const newNestedTodoId = (state: RootState) => {
    if (state.nestedTodos.nestedTodos.length) {
        return state.nestedTodos.nestedTodos[state.nestedTodos.nestedTodos.length - 1].id + 1
    }
    return 1
}