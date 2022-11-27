import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';
import TodoItemPage from './components/Todo/TodoItemPage/TodoItemPage';
import TodoList from './components/Todo/TodoList';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout /> }>
                    <Route path='projects' element={<Projects />} />
                    <Route path='todo'>
                        <Route index element={<TodoList />}/>
                        <Route path=':todoId' element={<TodoItemPage /> } />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

