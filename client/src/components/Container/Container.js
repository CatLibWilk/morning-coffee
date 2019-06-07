import React, { Component } from 'react';
import API from '../../utils/API'

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            serviceData: []
        }
    }

    componentDidMount(){
        API.getContent(this.props.sourceType)
            .then(res => {
                const returnedData = [...res.data]
                this.setState({serviceData: returnedData})

            })
    }

    
    render(){
        return(
            <div class='col-sm-6 mt-5 mb-5 bg-primary'>
                {
                    this.state.serviceData.map(dataObj => {
                        return <div class='p-2'>
                                    <h3>{dataObj.title}</h3>
                                    <p>{dataObj.description}</p>
                                </div>
                    })
                }
            </div>
        )
    }
}

export default Container;
