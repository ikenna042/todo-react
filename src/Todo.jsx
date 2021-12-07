import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

const Todo = () => {
    const { id } = useParams()
    const [todo, setTodo] = useState();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
            const todoResponse = res.data
            setTodo(todoResponse);
            console.log('mounted')
        }
        )

        return (
            console.log('unmounted')
        )
    }, [])
    console.log(todo);
    const { id: todoId, userId, title, completed } = todo || {};
    return(
        <div>
            {todo ? (
                <div>
                <h1>{`Todo id: ${todoId}`}</h1>
                <h1>{`Todo user id: ${userId}`}</h1>
                <h1>{`Todo title: ${title}`}</h1>
                <h1>{`Todo completed: ${completed}`}</h1>
                </div>
            ) : (
                <CircularProgress />
            )
        }
        </div>
        
    )
}

export default Todo;