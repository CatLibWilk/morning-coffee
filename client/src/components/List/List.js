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
            this.setState( {todos: returned.data} )
        }); 
    };
    
    //test firebase call functionality outside of componentDidMount
    // getTodos = () => {
    //     console.log('tada clicked')
    //     API.getToDos()
    //         .then(returned => {
    //             this.setState( {todos: returned.data} )
    //         });
    // }

   
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
                <button onClick={this.getTodos}>Test Todos</button>
            </div>
        )
    }
}

export default List;
