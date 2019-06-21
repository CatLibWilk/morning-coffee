import React, { Component } from 'react';
import API from '../../utils/API'

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            serviceData: [],
            weatherData: [{
                cloud_cover: '',
                weather_description: '',
                temp: '',
                humidity: ''
            }]
        }
    }

    componentDidMount(){
        if(this.props.sourceType){
        API.getContent(this.props.sourceType)
            .then(res => {
                // console.log(res.data)
                let returnedData = [];
                if(res.data.weather_flag){
                    let returnedData = [res.data]
                    this.setState( {weatherData: returnedData} )
                }else{
                    returnedData = [...res.data]
                    this.setState( {serviceData: returnedData} )
                }
                

            })
        }
    }

    goToContent = (url) =>{
        // console.log(url);
        window.open(`${url}`, '_blank');
    }

    
    render(){
        return(
            // <div class='col-sm-6 m-2'>
            this.props.weatherDiv ? <div class='row col-12'>{this.state.weatherData.map(weather => {
                return <div class='col mx-auto'>
                            <h3>Currently in Philadelphia</h3>
                            <h1>{weather.weather_description}</h1>
                            <div class='col'>
                                <h4 class='d-inline m-5'>{weather.temp}&deg;F</h4>
                                <h4 class='d-inline m-5'>{weather.cloud_cover}% Clouds</h4>
                                <h4 class='d-inline m-5'>{weather.humidity}% Humidity</h4>
                            </div>
                        </div>
            })}</div> :
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
