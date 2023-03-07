import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import Cookies from 'js-cookie';

const Todos = () => {
    const todosCookie = 'todosArray';
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const todosArray = (Cookies.get(todosCookie)) ? Cookies.get(todosCookie).split(',') : [];
        setTodos(todosArray);
    }, [])

    const handleTodo = todo => {
        let inputVal = true;
        for (let i = 0; i < todos.length; i++) {
            if (todos[i] === todo) {
                inputVal = false;
            }
        }
        if (todo.trim() && inputVal) {
            Cookies.set(todosCookie, [...todos, todo], { expires: 1 })
            setTodos(prevTodos => [...prevTodos, todo]);


        } else if (inputVal === false) {
            alert("Already in list!")
        } else {
            alert("Write something!")
        }
    };

    const handleDelete = (todo) => {
        Cookies.set(todosCookie, todos.filter(e => e !== todo))
        setTodos(prevTodos => prevTodos.filter(e => e !== todo))
    }

    return (
        <>
            <Header handleTodo={handleTodo} />
            <TodoList todos={todos} handleDelete={handleDelete} />
        </>
    )
}

export default Todos