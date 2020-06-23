import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';
import Check from 'pages/Check';
import Env from 'pages/Env';
import NotFound from 'pages/NotFound';
import './Body.css';

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }




    

   

    render() {
        console.log(this.props.unumber);
        return (
            <div id='body'>
                
                    <Switch>
                        <Route path={`/${this.props.uid}/${this.props.uname}/${this.props.unumber}/env`} render={() => <Env subid={this.props.uid} subname={this.props.uname} subnumber={this.props.unumber}/>}/>
                        <Route path={`/${this.props.uid}/${this.props.uname}/${this.props.unumber}`} render={() => <Home subid={this.props.uid} subname={this.props.uname} subnumber={this.props.unumber} />}/>

                        <Route component={NotFound} />
                    </Switch>

            </div>
        );
    }
    
}

export default Body