import React from 'react';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            "todoName" : ""
        }

        this.handleToDoNameChange = this.handleToDoNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleToDoNameChange(event){
        let value = event.target.value;
        this.setState({"todoName" : value});

    }
    handleSubmit(event) {
        event.preventDefault();

        if(this.state.todoName.trim() !== '')
        {
            this.props.addItem(this.state.todoName);
            this.setState({"todoName" : ""});
        }
    }

    render () {
        return (
            <form ref="form" onSubmit={this.handleSubmit} className="form-inline">
                <input type="text" value={this.state.todoName} className="form-control" placeholder="add a new todo..." onChange={this.handleToDoNameChange}/>
                <button type="submit" className="btn btn-primary">Add</button> 
            </form>
        );   
    }
}

export default TodoForm