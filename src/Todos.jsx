import React, { useEffect, useState } from 'react';
import axios from "axios";
import { CircularProgress } from '@material-ui/core'
import TodoCard from './TodoCard';

const Todos = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            const todoResponse = res.data
            setTodos(todoResponse);
            console.log('mounted')
        }
        )

        return (
            console.log('unmounted')
        )
    }, [])
    console.log(todos)

    return(
        <>
            {todos ?
            (
            <div> {todos.map((todo) => <TodoCard todo={todo} />)} </div>
            )
            : <CircularProgress />}
        </>
        
    )
}

export default Todos;