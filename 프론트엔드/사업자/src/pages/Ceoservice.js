import React, { Component } from 'react';
import './Noregist.css';
import Product_image from '../images/Product.PNG';

import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Head from '../head/Head';
import './Ceoservice.css';
import Ceoservice_module from '../Servicelist/Ceoservice_module';
import kimbab_image from '../images/김밥.jpg';
import dduck_image from '../images/떡볶이.jpg';
import ramyun_image from '../images/라면.jpg';
import pride_image from '../images/튀김.jpg';





function Fruit({ name }) {

    return <div className='service_box_menu'>
        <div className='menu_img'>
            <img src={name.image} width="100%" height="100%"></img>
        </div>
        <div className='menu_name'>{name.name}</div>
        <div className='menu_price'>{name.price}</div>
        <div className='menu_explain'>{name.explain}</div>
    </div>
}

function Fruit2({ name }) {
    console.log(name);
    return <div className='service_box_menu'>
        <div className='menu_img'>
            <img src={name[0]} width="100%" height="100%"></img>
        </div>
        <div className='menu_name'>{name[1]}</div>
        <div className='menu_price'>{name[2]}</div>
        <div className='menu_explain'>{name[3]}</div>
    </div>
}


const temp = [
    {
        image: dduck_image,
        name: '떡볶이',
        price: '3000원',
        explain: '매움'
    },
    {
        image: pride_image,
        name: '튀김',
        price: '2000원',
        explain: '깔끔한 튀김옷',
    },
    {
        image: ramyun_image,
        name: '라면',
        price: '3000원',
        explain: '집 보다 맛있음',
    },

    {
        image: kimbab_image,
        name: '김밥',
        price: '3000원',
        explain: '밥알보다 재료가 많음',
    },
]




class Ceoservice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Servicelist: [],
        }
    
    }
    

    busregist = () => {
        window.open(`http://localhost:3001/Ceoservice_module/${this.props.businessnumber}`, 'ot', 'width=800, height=700, status=no,resizable=no');
    }

    componentDidMount() {
        this.callApi();

    }

    callApi = () => {
        fetch(`http://52.79.100.159:8080/api/best_menu/${this.props.businessnumber}`)
            .then(response => response.json())
            
            .then(data => 
                this.setState({
                    Servicelist :data.map(num =>{return [num.serviceImage,num.serviceName,num.servicePrice,num.serviceExplanation]}),
                })
                
                /*
                console.log(data);
                var ceolist=[];
                ceolist = data.map(num =>{return num.busname})
                this.setState({
                    Ceolist :data.map(num =>{return num.busname}),
                })
                */
                
            )
            .catch(error => console.log(error))
           

    }




    render() {
        console.log(this.state.Servicelist);
        return (
            <div className="ser_box">


                <div className="ser_title">
                    서비스 등록
                    <button onClick={this.busregist}> + </button>
                </div>
                <div className="service">

                    <div className='service_box'>
                        {/* {temp.map(element => <Fruit name={element} />)} */}
                        {this.state.Servicelist.map(element => <Fruit2 name={element} />)}
                    </div>
                </div>
            </div>

        )
    }
};

export default Ceoservice;