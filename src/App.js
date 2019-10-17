import React, {Component} from 'react';
import './App.css';
import TodoField from "./todo-field/TodoField";
import InputTodo from "./input-todo/InputTodo";
import EditTodo from "./edit-todo/EditTodo";


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            input: '',
            id: 0,
            edit: false
        }
    }

    changeStatus = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done
                }
                return todo
            })
        })
    }

    editItem = (id, text) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.todo = text
                }
                return todo
            })
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: this.state.id,
            todo: this.state.input,
            done: false
        }
        this.setState({
            todos: [
                ...this.state.todos,
                newTodo
            ],
            id: this.state.id + 1,
            input: '',
        })

    }

    addTodo = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    deleleItem = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }




    render() {
        return (
            <div className="App">
                <h1>Todo List</h1>
                <InputTodo addTodo={this.addTodo}
                           onSubmit={this.onSubmit}
                           input={this.state.input}
                />

                <TodoField todoList={this.state.todos}
                           changeStatus={this.changeStatus}
                           deleleItem={this.deleleItem}
                />
            </div>
        );
    }
}

export default App;
