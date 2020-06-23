import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';
import Noregist from '../pages/Noregist';
import Ceo_Home from 'shared/Ceo_Home';
import Ceo_regist from '../pages/Ceo_regist';
import First from '../pages/Fisrt';
import { Route, Switch } from 'react-router-dom';
import Ceoservice_module from '../Servicelist/Ceoservice_module';

const Root = () => (
    <BrowserRouter>
        <App/>      
    </BrowserRouter>
);

export default Root;