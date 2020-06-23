import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import './Foot.css';
import '../pages/Env.css';
class Body extends Component {
    render() {
        return (
            <div id="footer">
               서울특별시 역삼동 614-18 행운빌<br/> 
               만든이 : 세 얼간이 
            </div>
        );
    }
}

export default Body