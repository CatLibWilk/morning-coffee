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

            console.log(returned.data)
            let todoArray = []
            const returnedObj = returned.data
            Object.keys(returned.data).map(key => {
                const todoArr = [ key, returnedObj[key].todo ]
                todoArray.push( todoArr )
            })
            console.log(todoArray)
            this.setState( {todos: todoArray} )
        }); 
    };

    handleInputSubmit = (e) => {
        e.preventDefault(); 
        console.log(`Current todo input ${this.state.todo_input}`);
        API.addTodo({todo: this.state.todo_input}).then(response => {
            document.getElementById("todo-form").reset();
            this.componentDidMount()})
        }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState( {todo_input: e.target.value} );
    }

    handleDelete = (item) => {
        console.log(item)
        API.deleteTodo(item).then(response => this.componentDidMount())
    }
    
   
    render(){
        return(
            <div class='mx-auto mt-5'>
                <h1>Todos Today</h1>
                {(this.state.todos.map instanceof Function)? <div >{this.state.todos.map(item => {
                    return <tr class='served-row mt-2'>
                        <td><h3>{item[1]}</h3></td>
                        <td id={item[0]} onClick={() => {this.handleDelete(item[0])}}> x </td>
                    </tr>
                })}
                </div> : 'no Todos Today'}
                <form id="todo-form" onSubmit={this.handleInputSubmit}>
                    <label>
                    <input id="todo-input-field" type="text" onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default List;
