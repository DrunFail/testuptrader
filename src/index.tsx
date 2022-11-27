import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './Projects/Projects';
import Layout from './Layout/Layout';
import TodoList from './Todo/TodoList';
import TodoItemPage from './Todo/TodoItemPage/TodoItemPage';


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

