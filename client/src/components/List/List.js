import React, { Component } from 'react';
import API from '../../utils/API';


class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount(){
        API.getToDos()
        .then(returned => {
            const returnedTodos = Object.values(returned.data)
            console.log(returnedTodos)
            
            this.setState( {todos: returnedTodos} )
        }); 
    };
    
   
    render(){
        return(
            <div class='mx-auto mt-5'>
                <h1>Todos Today</h1>
                {(this.state.todos.map instanceof Function)? <div >{this.state.todos.map(item => {
                    return <tr class='served-row mt-2'>
                        <td><h3>{item}</h3></td>
                    </tr>
                })}
                </div> : 'no Todos Today'}

            </div>
        )
    }
}

export default List;
