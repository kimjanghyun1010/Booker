import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Noregist from '../pages/Noregist';
import App from '../shared/App';
import Head from 'head/Head';
import Body from 'body/Body';
import Foot from 'foot/Foot';
import Ceoservice_module from '../Servicelist/Ceoservice_module';

const First = ({ match }) => {

    const test = match.params.uname;
    console.log(test);
    console.log(match.params.uid);
    console.log(match.params.uname);
    console.log(match.params.unumber);
    return (

        <center>

            <Head uid={match.params.uid} uname={match.params.uname} unumber={match.params.unumber} />
            <Body uid={match.params.uid} uname={match.params.uname} unumber={match.params.unumber}/>
            <Foot uid={match.params.uid} uname={match.params.uname} unumber={match.params.unumber}/>
        </center>

    );
}





export default First;