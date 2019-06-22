import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoApp extends React.Component {

    constructor (props) {
      super(props);

      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.markTodoDone = this.markTodoDone.bind(this);

      this.state = {
          "todoItems":[
              {index: 0, value: "learn react"},
              {index: 1, value: "learn react2"},
              {index: 2, value: "learn react3"}
            ]
        };
    }

    addItem(todoItem) {
        const {todoItems} = this.state;
        todoItems.push({
            index : todoItems.length,
            value : todoItem
        });
        this.setState({todoItems: todoItems});
    }

    removeItem = (itemIndex) => {
        const {todoItems} = this.state;
        todoItems.splice(itemIndex, 1);
        this.setState({
            todoItems: todoItems
        });
    }

    markTodoDone = (itemIndex) => {
      const {todoItems} = this.state;
      const todo = todoItems[itemIndex];

      todoItems.splice(itemIndex, 1);

      todo.done = !todo.done;
      todoItems.splice(itemIndex, 0,todo);

      this.setState({todoItems: todoItems});  
    }

    render() {
      return (
        <div id="main">
          <h1 style={{"text-align":"center"}}>Todo list</h1>
          <TodoList items={this.state.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} />
          <TodoForm addItem={this.addItem} /> 
        </div>
      );
    }
  }

  export default TodoApp