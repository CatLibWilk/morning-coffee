import React, { Component } from "react";
import Navbar from "../../components/Navbar"
import Container from "../../components/Container"
import List from "../../components/List"
import API from '../../utils/API.js'
import './Home.css'




class Home extends Component {

    constructor (props) {
        super(props)
        this.state = {
                
        }
    };

    //https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/#react-firebase for contining firebase setup. Unlock firebase database from private

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
                    <div class='row'>
                        <List />
                    </div>
                </div>
            </div>
        )
    }
};


export default Home;