import { useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../../Comments/CommentsList";
import { FAKE_DATA } from "../../data";

export default function TodoItemPage() {
    const { todoId } = useParams();
    if (todoId === undefined) {
        throw new Error('error TodoPage, failed to get id ')
    }

    const findTodo = FAKE_DATA.find(item => item.id === +todoId)
    if (findTodo === undefined) {
        throw new Error('error TodoPage, not find todo')
    }

    
  
    

    return (
        <div>
            
            <CommentList  todoId={todoId }/>
        </div>
        
        );
}