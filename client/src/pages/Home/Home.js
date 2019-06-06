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
                <Container sourceType={'tagesschau'}/>
            </div>
        )
    }
};


export default Home;