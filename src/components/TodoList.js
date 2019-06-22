import React from 'react';
import TodoListItem from './TodoListItem';

 class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render () {
        return (
            <ul>
                {this.props.items.map((item, index) => 
                    <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
                )}
            </ul>
        );
    }
  }

export default TodoList