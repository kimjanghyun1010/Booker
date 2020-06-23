import React, { Component } from 'react';
import Usertabs from '../module/tabs/Usertabs.js';
import './Home.css';
import { NavLink } from 'react-router-dom';
import UserTabs from '../module/tabs/Usertabs.js';
import { Link } from 'react-router-dom';
import Check from './Check';
import Check2 from './Check2';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard.js';
import Prepare from './Prepare.js';
import Notice from './Notice.js';
import Center from './Center.js';
import Guide from './Guide.js';


class Home extends Component {
    constructor(props){
        super(props);
    }

    

    render() {
        console.log(this.props.subname);
        console.log(this.props.subnumber);
        return (
            <div className='home_body'>
                <div className='home_body1'>
                    <Link exact to={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/dash/dash`}><button>대쉬보드</button></Link>
                    <Link exact to={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/dash/list`}><button>예약자리스트</button></Link>
                    <Link exact to={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/dash/guide`}><button>등록가이드</button></Link>
                    <Link exact to={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/dash/center`}><button>고객센터</button></Link>

                </div>

                <div className='home_body2'>
                    <Switch>
                        <Route path={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/dash/dash`} render={() => <Dashboard businessnumber={this.props.subnumber}/>}/>
                        <Route path={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/dash/list`} render={() => <Check2 businessnumber={this.props.subnumber}/>}/>
                        <Route path={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/dash/guide`} component={Guide} />
                        <Route path={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/dash/center`} component={Center} />
                        <Route path={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}`} component={Notice} />
                    </Switch>
                </div>
                

            </div>
        );
    }
};

export default Home;