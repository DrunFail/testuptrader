import { combineReducers } from 'redux';
import { commentsReducer } from './reducers/comments/commentsReducer';
import { nestedTodosReducer } from './reducers/nestedTodo/nestedTodosReducer';
import { projectReducer } from './reducers/project/projectReducer';
import { todosReducer } from './reducers/todos/todosReducer';


const rootReducer = combineReducers({
    project: projectReducer,
    todos: todosReducer,
    nestedTodos: nestedTodosReducer,
    comments: commentsReducer
    });

export default rootReducer;