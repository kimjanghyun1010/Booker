import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, } from 'pages';
import Menu from 'components/Menu';
import Head from 'head/Head';
import Body from 'body/Body';
import Foot from 'foot/Foot';
import Fisrt from '../pages/Fisrt';
import Noregist from '../pages/Noregist';
import Ceo_regist from '../pages/Ceo_regist';
import Env from '../pages/Env';
import './App.css';
import Ceoservice_module from '../Servicelist/Ceoservice_module';
import Postcode from '../Servicelist/kakaoAddress';
import Template_module from '../pages/Template_module';

const a = 1;


class App extends Component {

    onSearchSubmit(text) {
    	console.log(text);
    }



    render() {
        if (a == 1) {
            return (
                <Switch>
                    <Route path="/Ceo_regist/address" component={Postcode} />
                    <Route path="/Ceo_regist/:uid" component={Ceo_regist} />
                    <Route path="/Ceoservice_module/:storenumber" component={Ceoservice_module} />
                    <Route path="/Template_module/:title" component={Template_module} />
                    <Route path="/:uid/:uname/:unumber" component={Fisrt} />
                    <Route path="/:uid" component={Noregist} />
                    
                </Switch>
            );
        }

        else {
            return (
                <Noregist />
            );
        }



        // return (
        //     <center>
        //         <Head/>
        //         <Body/>
        //         <Foot/>
        //     </center>
        // );
    }
}

export default App;