import React from 'react';
import styles from './TodoList.module.scss';
import Button from '../UI/Button';

const TodoList = (props) => {


    const todoList = props.todos.map((todo, key) => {
        return ([
            <p key={key} className={styles.todoLine}>
                <li>{todo}</li>
                <Button onClick={() => {props.handleDelete(todo)}}>
                    <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="style=linear">
                            <g id="close">
                                <path id="vector" d="M6.75024 6.74512L17.2551 17.25" stroke="#1a1e24" strokeWidth="2" strokeLinecap="round" />
                                <path id="vector_2" d="M17.255 6.74512L6.75006 17.2499" stroke="#1a1e24" strokeWidth="2" strokeLinecap="round" />
                            </g>
                        </g>
                    </svg>
                </Button>
            </p>
        ])
    });

    return (
        <ol className={styles.ol}>{todoList}</ol>
    )
}

export default TodoList