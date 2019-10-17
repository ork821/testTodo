import React from 'react';
import './todo-item.css'
import InputTodo from "../input-todo/InputTodo";

const TodoItem = ({todo, changeStatus, id, done, deleleItem, editItem}) => {
    return (
        <div className='todo'>
            <input type='checkbox' onChange={
                () => {changeStatus(id)}

            }/>
            <p className={done ? 'done' : ''}>
                {todo}
            </p>
            <button onClick={() => deleleItem(id)}>X</button>
        </div>
    );
};

export default TodoItem;
