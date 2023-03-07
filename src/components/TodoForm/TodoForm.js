import React from 'react';
import styles from './TodoForm.module.scss';
import Button from '../UI/Button';

const TodoForm = (props) => {
    const inputRef = React.useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const curr = inputRef.current.value
        props.handleTodo(curr);
        inputRef.current.value = null;
    }
    return (
        <form className={styles.todoInput} onSubmit={handleSubmit}>
            <input type="text"
                ref={inputRef}
                required
                autoFocus
                placeholder="Add your new todo"
            />
            <Button type='submit'>
                <svg className={styles.addIcon} width="36px" height="36px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <g id="style=linear">
                        <g id="add-box">
                            <path id="vector" d="M2 8C2 4.68629 4.68629 2 8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16V8Z" stroke="#1a1e24" strokeWidth="2" />
                            <path id="vector_2" d="M12 7.75732L12 16.2426" stroke="#1a1e24" strokeWidth="2" strokeLinecap="round" />
                            <path id="vector_3" d="M16.25 12L7.76476 12" stroke="#1a1e24" strokeWidth="2" strokeLinecap="round" />
                        </g>
                    </g>
                </svg>
            </Button>
        </form>
    )
}

export default TodoForm