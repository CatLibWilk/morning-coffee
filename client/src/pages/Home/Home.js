import React, { Component } from "react";
import Navbar from "../../components/Navbar"
import Container from "../../components/Container"
import API from '../../utils/API.js'
import './Home.css'




class Home extends Component {

    constructor (props) {
        super(props)
        this.state = {
                
        }
    };

    render(){
       
        return(
            <div>
                <Navbar />
                <div class='container-fluid'>
                    <div class='row'>
                        <Container weatherDiv={'weatherDiv'} position={'mx-auto'} sourceType={'openweather'} />
                        <Container position={'mr-auto'} sourceType={'tagesschau'}/>
                        <Container position={'mx-auto'} sourceType={'makinghiphop'}/>
                    </div>
                    <div class='row'>
                        <Container quoteDiv={'qd'} position={'mx-auto'} sourceType={'quotes'} />
                    </div>
                </div>
            </div>
        )
    }
};


export default Home;