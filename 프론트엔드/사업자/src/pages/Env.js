import React, { Component } from 'react';
import Usertabs2 from '../module/tabs2/Usertabs2';
import './Env.css';
import Ceoservice from '../pages/Ceoservice';
import Ceohomepage from '../Servicelist/Ceohompage';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Prepare from './Prepare.js';
import Template from './Template.js';
import Reservepage from '../Servicelist/Reservepage.js';




class Env extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='service_body'>
                <div className='service_body1'>

                    <Link exact to={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/env/service`}><button>서비스</button></Link>

                    <Link exact to={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/env/homepage`}><button>홈페이지</button></Link>
                    <Link exact to={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/env/reservepage`}><button>예약페이지</button></Link>
                    <Link exact to={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/env/template`}><button>템플릿 보기</button></Link>    
                    
                </div>

                <div className='service_body2'>
                    <Switch>
                        <Route path={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/env/service`} render={() => <Ceoservice businessnumber={this.props.subnumber}/>}/>
                        <Route exact path={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/env/homepage`} render={() => <Ceohomepage businessnumber={this.props.subnumber}/>}/>
                        <Route exact path={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/env/reservepage`} component={Reservepage} />
                        <Route exact path={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/env/template`} component={Template} />
                        {/* <Route exact path="/list" component={Check} /> */}
                    </Switch>
                    {/* render={() => <Ceohomepage businessnumber={this.props.subnumber}/>}/> */}

                    <Route exact path={`/${this.props.subid}/${this.props.subname}/${this.props.subnumber}/env/prepare`} component={Prepare} />


                </div>

            </div>
        );
    }
};

export default Env;