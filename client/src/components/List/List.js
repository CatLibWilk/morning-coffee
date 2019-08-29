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
        console.log(`todos array length: ${this.state.todos}`)
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

    handleDelete = (pass) => {
        console.log(pass)
        const shrink = new Promise((res, rej) => {
            const tar = document.getElementById(pass)

            tar.classList.add('shrinky')
            setTimeout(() =>{
                console.log('shrink timeout')
            res()
            }, 1000)
        });
        shrink.then(() =>{
            console.log('.then start')
            API.deleteTodo(pass).then(response => {
                this.componentDidMount();
                const todoArr = document.querySelectorAll('.todo-item')
                todoArr.forEach(div => div.classList.remove('shrinky'))
            });
        });
    };
    
   
    render(){
        return(
            <div class='mx-auto mt-5'>
                <h1>Todos Today</h1>
                <div>
                    {this.state.todos.length == 1 ? <div><h3>All Done For Today!</h3><h4>Add some more below...</h4></div>
                     : this.state.todos.map(item => {
                        return <div id={item[0]} class='todo-item' onClick={() => {this.handleDelete(item[0])}}><h3>{item[1]}</h3></div>
    
                    })}
                </div>

                <form id="todo-form" onSubmit={this.handleInputSubmit}>
                    <label>
                    <input id="todo-input-field" type="text" onChange={this.handleInputChange} />
                    </label>
                    <button class='btn-primary mt-5' type="submit" value="Add">Add</button>
                </form>
            </div>
        )
    }
}

export default List;
