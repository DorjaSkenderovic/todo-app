import styles from './app.module.scss';
import React from 'react';
import Cookies from 'js-cookie'

function App() {
  const todosCookie = 'todosArray'
  const inputRef = React.useRef(null);
  const todosArray = (Cookies.get(todosCookie)) ? Cookies.get(todosCookie).split(',') : []
  const [todos, setTodos] = React.useState(todosArray);

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputVal = true;
    const curr = inputRef.current.value
    for (let i = 0; i < todos.length; i++) {
      if (todos[i] === curr) {
        inputVal = false;
      }
    }
    if (curr.trim() && inputVal) {
      Cookies.set(todosCookie, [...todos, curr],{ expires: 1})
      setTodos(prevTodos => [...prevTodos, curr]);


    } else if (inputVal === false) {
      alert("Already in list!")
    } else {
      alert("Write something!")
    }
    inputRef.current.value = null;
  };

  const handleDelete = (todo) => {
    Cookies.set(todosCookie, todos.filter(e => e !== todo))
    setTodos(prevTodos => prevTodos.filter(e => e !== todo))
  }

  const todoList = todos.map((todo, key) => {
    return ([
      <p key={key} className={styles.todoLine}>
        <li>{todo}</li>
        <button onClick={() => handleDelete(todo)}>
          <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="style=linear">
              <g id="close">
                <path id="vector" d="M6.75024 6.74512L17.2551 17.25" stroke="#1a1e24" strokeWidth="2" strokeLinecap="round" />
                <path id="vector_2" d="M17.255 6.74512L6.75006 17.2499" stroke="#1a1e24" strokeWidth="2" strokeLinecap="round" />
              </g>
            </g>
          </svg>
        </button>
      </p>
    ])
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Todo App</p>
        <form className={styles.todoInput} onSubmit={handleSubmit}>
          <input type="text"
            ref={inputRef}
            required
            autoFocus
            placeholder="Add your new todo"
          />
          <button type='submit'>
            <svg className={styles.addIcon} width="36px" height="36px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <g id="style=linear">
                <g id="add-box">
                  <path id="vector" d="M2 8C2 4.68629 4.68629 2 8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16V8Z" stroke="#1a1e24" strokeWidth="2" />
                  <path id="vector_2" d="M12 7.75732L12 16.2426" stroke="#1a1e24" strokeWidth="2" strokeLinecap="round" />
                  <path id="vector_3" d="M16.25 12L7.76476 12" stroke="#1a1e24" strokeWidth="2" strokeLinecap="round" />
                </g>
              </g>
            </svg>
          </button>
        </form>
      </div>
      <ol>{todoList}</ol>
    </div>

  );
}

export default App;
