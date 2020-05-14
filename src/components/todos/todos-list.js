import React from 'react';
import Todo from './todo';

const todoList = [{
    id: 0,
    title: 'Learn React',
    done: false,
}, {
    id: 1,
    title: 'Learn Redux',
    done: false,
}, {
    id: 2,
    title: 'Learn Redux Forms',
    done: false,
}];

class TodosList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todoList,
        };
    }

    toggleDone = ({ id })  => {
        const todo = this.state.todos.find(t => t.id === id);
        todo.done = !todo.done;
        this.setState({ todos: this.state.todos })
    }

    render() {
        return (
            <div>
                <h2>Todos List</h2>
                {this.state.todos.map(todo => <Todo
                    key={todo.id}
                    toggleDone={this.toggleDone}
                    todo={todo}></Todo>
                )}
            </div>
        )
    }
}

export default TodosList;
