import React from 'react';
import './todo-item.css'
import InputTodo from "../input-todo/InputTodo";

const TodoItem = ({todo, changeStatus, id, done, deleleItem, showEditField}) => {
    return (
        <div className='todo'>
            <input type='checkbox' onChange={
                () => {changeStatus(id)}

            }/>
            <p className={done ? 'done' : ''}>
                {todo}
            </p>
            <button onClick={() => deleleItem(id)}>X</button>
            <button onClick={() => showEditField(id, todo)}>Edit</button>
        </div>
    );
};

export default TodoItem;
