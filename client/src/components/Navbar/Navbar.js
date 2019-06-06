import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand logo"><img class="logo" id="coffee-logo" src={require('../../images/coffee-logo.png')}></img></a>

                <div class="collapse navbar-collapse ml-5" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mt-2 mt-lg-0">
                    <li class="nav-item mr-5 ml-5">
                        <a class="nav-link mr-auto" href="http://gmail.google.com" target="_blank"><img class="logo" src={require('../../images/gmail.png')}></img></a>
                    </li>
                    <li class="nav-item mr-5 ml-5">
                        <a class="nav-link" href="http://tagesschau.de" target="_blank"><img class="logo" src={require('../../images/tagesshau.png')}></img></a>
                    </li>
                    <li class="nav-item mr-5 ml-5">
                        <a class="nav-link" href="http://dict.cc" target="_blank"><img class="logo" src={require('../../images/dict.jpg')}></img></a>
                    </li>
                    <li class="nav-item mr-5 ml-5">
                        <a class="nav-link" href="http://reddit.com" target="_blank"><img class="logo" src={require('../../images/reddit.png')}></img></a>
                    </li>
                    </ul>
                    
                </div>
            </nav>
        )
    }
}

export default Navbar;
