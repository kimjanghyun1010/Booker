import React, { Component } from 'react';
import './Dashboard.css';
import Product_image from '../images/Product.PNG';
import Template_image from '../images/Template.png';
import Prepare_image from '../images/prepare.PNG';
import dduck_image from '../images/뚱보분식2.jpg';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Check from './Check';
import { Route, Switch } from 'react-router-dom';




class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: '0',
            week: '0',
            month: '0',
        }

    }



    componentWillMount() {
        console.log("componentWillMount");
        var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');


        const date = new Date();

        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var month2='';
        var month3='';
        var week2 = '' ;
        var week3 = '';
        var today = new Date().getDay();
        var todayLabel = week[today];

        
        if ((day + '').length < 2) {
            day = "0" + day;
        }

        if ((month + '').length < 2) {
            month = "0" + month;
        }

        console.log(todayLabel);
        //------------------------------------------------------------
        if (todayLabel == '토요일'){
             (week2 =String(parseInt(day)-6));
        }

        else if (todayLabel == '금요일'){
             (week2 =String(parseInt(day)-5));
        }
        else if (todayLabel == '목요일'){
             (week2 =String(parseInt(day)-4));
        }
        else if (todayLabel == '수요일'){
            (week2 =String(parseInt(day)-3));
        }
        else if (todayLabel == '화요일'){
             (week2 =String(parseInt(day)-2));
        }
        else if (todayLabel == '월요일'){
             (week2 =String(parseInt(day)-1));
        }

        else{
             week2 =day;}
        
        if (parseInt(week2)<0){
            week3 = String(29 + parseInt(day));
            month3= String(parseInt(month)-1);
        }
        else{
            week3 =week2;
            month3=month;
                
        }
    
    
        var period = year + month + day;
        var period2 = year + month3 + week3;
        var period3 = year + month3 + String(parseInt(week2)+6);
        console.log(todayLabel);
        console.log(year);
        console.log(month);
        console.log(day);
        console.log(week2);
        console.log(period);

        this.callApiday(this.props.businessnumber, period);
        this.callApiweek(this.props.businessnumber, period2,period3);
        this.callApimonth(this.props.businessnumber, month);
    }


    callApiday = (numberdata, daydata) => {
        fetch(`http://52.79.100.159:8080/api/book_table/${numberdata}/${daydata}`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    day: data.length,
                })
            )
            .catch(error => console.log(error));
    }

    callApiweek = (numberdata, weekdata1,weekdata2) => {
        console.log(weekdata1,weekdata2);
        fetch(`http://52.79.100.159:8080/api/book_table/${numberdata}/${weekdata1}/${weekdata2}`)
            .then(response => response.json())
            
            .then(data =>
                this.setState({
                    week: data.length,
                })
            )
            .catch(error => console.log(error));
    }



    callApimonth = (numberdata, monthdata) => {
        fetch(`http://52.79.100.159:8080/api/book_table/book/${numberdata}/${monthdata}`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    month: data.length,
                })
            )
            .catch(error => console.log(error));
    }




    render() {
        console.log(this.props.businessnumber);
        console.log(this.state.day);



        return (
            <div className='dash_box'>
                <div className='dash_title'>대쉬보드</div>
                <div className='dash'>
                    <div className='dashbody1'>
                        <div className='dash_second_title'>
                            <li>업체 전경</li>
                        </div>
                        <div className='dash_explain'>
                            <img src={dduck_image} width="100%" height="100%"></img>
                        </div>
                        <div className='dash_explain_box'>
                            <div className='dash_second_title'>
                                <li>메모</li>
                            </div>
                            <div className='dash_explain2'>
                                <h3>요일별 할인목록</h3>
                                <li>월 : 떡볶이 1인분 2천원</li>
                                <li>화 : 튀김 1인분 2천원</li>
                                <li>수 : 오뎅 1인분 2천원</li>
                                <li>목 : 라면 1인분 2천원</li>

                            </div>
                        </div>
                    </div>



                    <div className='dashbody2'>
                        <div className='dash_second_title'>
                            <li>일일 예약자</li>
                        </div>
                        <div className='dash_unit-box'>
                            <div className='dash_inner-title'>Today</div>
                            <div className='dash_inner-box'>{this.state.day}명</div>
                        </div>
                        <div className='dash_second_title'>
                            <li>주간 예약자</li>
                        </div>
                        <div className='dash_unit-box'>
                            <div className='dash_inner-title'>Week</div>
                            <div className='dash_inner-box'>{this.state.week}명</div>
                        </div>
                        <div className='dash_second_title'>
                            <li>월간 예약자</li>
                        </div>
                        <div className='dash_unit-box'>
                            <div className='dash_inner-title'>Month</div>
                            <div className='dash_inner-box'>{this.state.month}명</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default Dashboard;