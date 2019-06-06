import React, { Component } from 'react';
import API from '../../utils/API'

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        API.getContent(this.props.sourceType)
            .then(res => console.log(res))
    }

    
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Container;
