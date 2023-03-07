import styles from './Header.module.scss';
import React from 'react'
import TodoForm from '../TodoForm/TodoForm';

const Header = (props) => {
    
    return (
        <div className={styles.header}>
            <p className={styles.title}>Todo App</p>
            <TodoForm  handleTodo={props.handleTodo}/>
        </div>
    )
}

export default Header