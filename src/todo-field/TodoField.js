import React from 'react';
import TodoItem from "../todo-item/TodoItem";

const TodoField = ({todoList, changeStatus, deleleItem, editItem, showEditField}) => {
    return (
        <div>
            {
                todoList.map((todo, idx) => {
                    return <TodoItem key={idx}
                                     id={todo.id}
                                     todo={todo.todo}
                                     done={todo.done}
                                     changeStatus={changeStatus}
                                     deleleItem={deleleItem}
                                     editItem={editItem}
                                     showEditField={showEditField}
                    />
                })
            }
        </div>
    );
};

export default TodoField;
