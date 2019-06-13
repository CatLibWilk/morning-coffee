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
                this.setState( {serviceData: returnedData} )

            })
    }

    goToContent = (url) =>{
        // console.log(url);
        window.open(`${url}`, '_blank');
    }

    
    render(){
        return(
            // <div class='col-sm-6 m-2'>
            <div class={this.props.position ? `col m-2 ${this.props.position}` : 'col-sm-6 m-2'}>
                    <table class="table table-striped">
                        <thead>
                            <tr></tr>
                        </thead>
                        <tbody>
                            {   
                            this.state.serviceData.map(dataObj => {
                                return<tr class='served-row mt-2' onClick={() => {this.goToContent(dataObj.url)}}>
                                    <th scope="row"><img class='served-img' src={dataObj.img}></img></th>
                                    <td><h5>{dataObj.title}</h5></td>
                                    <td>{dataObj.description}</td>
                                </tr>
                                
                            })
                            }
                        </tbody>
                    </table>
            </div>
        
        )
    }
}

export default Container;
