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
            })
    };

   
    render(){
        return(
            <div class='mx-auto mt-5'>
                <h1>Todos Today</h1>
                <div >{this.state.todos.map(item => {
                    return <tr class='served-row mt-2'>
                        <td><h3>{item}</h3></td>
                    </tr>
                })}
                </div>
            </div>
        )
    }
}

export default List;
