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
                        <Container position={'mr-auto'} sourceType={'tagesschau'}/>
                        <Container position={'mx-auto'} sourceType={'makinghiphop'}/>
                    </div>
                </div>
            </div>
        )
    }
};


export default Home;