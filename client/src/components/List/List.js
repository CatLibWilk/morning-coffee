import React, { Component } from 'react';
import API from '../../utils/API';


class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            todo_input: ''
        };
    }

    componentDidMount(){
        API.getToDos()
        .then(returned => {
            const returnedTodos = Object.values(returned.data)
            console.log(returnedTodos)
            let todoArray = []
            returnedTodos.map(todo => {todoArray.push(todo.todo)})
            console.log(todoArray)
            this.setState( {todos: todoArray} )
        }); 
    };

    handleInputSubmit = (e) => {
        e.preventDefault(); 
        console.log(`Current todo input ${this.state.todo_input}`);
        API.addTodo({todo: this.state.todo_input})
    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState( {todo_input: e.target.value} );
    }

    handleDelete = (item) => {
        console.log(item)
        API.deleteTodo(item)
    }
    
   
    render(){
        return(
            <div class='mx-auto mt-5'>
                <h1>Todos Today</h1>
                {(this.state.todos.map instanceof Function)? <div >{this.state.todos.map(item => {
                    return <tr class='served-row mt-2'>
                        <td><h3>{item}</h3></td>
                        <td value={item} onClick={() => {this.handleDelete(item)}}>x</td>
                    </tr>
                })}
                </div> : 'no Todos Today'}
                <form onSubmit={this.handleInputSubmit}>
                    <label>
                    <input type="text" value={this.state.todo_input} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default List;
