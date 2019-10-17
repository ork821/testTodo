import React from 'react';

const InputTodo = ({addTodo, onSubmit, input}) => {
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <label>
                <input type="text"
                       name="name"
                       value={input}
                       onChange={(event => addTodo(event))}
                />
            </label>
            <input type="submit" value="Отправить" />
        </form>
    );
};

export default InputTodo;
