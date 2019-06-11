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

    
    render(){
        return(
            <div class='col-sm-6 m-2'>
                    <table class="table table-striped">
                        <thead>
                            <tr></tr>
                        </thead>
                        <tbody>
                            {   
                            this.state.serviceData.map(dataObj => {
                                return<tr class='served-row mt-2'>
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
