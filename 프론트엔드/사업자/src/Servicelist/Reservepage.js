import React, { Component } from 'react';
import './Ceohompage.css'
import CalendarSwitch from './calendarToggle';
import Time from './time'
import Time2 from './time2';
import MenuName from './menuName';
import MenuPrice from './menuPrice';
import ImageSwitch from './imageToggle';
import CommentSwitch from './commentToggle';
import CouponToggle from './couponToggle';
import SeatToggle from './SeatToggle';
import PlaceToggle from './PlaceToggle';
import { post } from 'axios';
class Reservepage extends Component {
    state = {

        setcoupon: '0',
        setseat: '0',
        setplace: '0',

    }

    minclick = () => {
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
        

        alert("전송완료 했습니다.")
    
    }


    addCustomer = () => {
        const url = `http://http://59.29.224.191:8080/api/store_list/${this.props.businessnumber}`;
        const data = {
            storeNumber: this.props.businessnumber,
            coupon: this.state.setcoupon,
            seat: this.state.setseat,
            place: this.state.setplace,
            

        };
        const header = {
            'Content-Type': 'application/json'
        };
        return post(url, data, header);
    }


    onsetcoupon = (text) => {
        this.setState({
            setcoupon: (text == false) ? "1" : "0",
        })
    }

    onsetseat = (text) => {
        this.setState({
            setcoupon: (text == false) ? "1" : "0",
        })
    }

    onsetpace = (text) => {
        this.setState({
            setcoupon: (text == false) ? "1" : "0",
        })
    }


    render() {
        console.log(this.state);
        return (
            <div className='hompi_box'>
                <div className='hompi_title'>
                    예약페이지 설정
                </div>
    
                <div className='homepage_box'>
                    <div>
                        <CouponToggle onClick={this.onsetcoupon} /><br></br>
                    </div>
                    

                    <div>
                        <SeatToggle onClick={this.onsetseat} /><br></br>
                    </div>
                    

                    

                    <div>
                        <PlaceToggle onClick={this.onsetpace} /> <br></br>
                    </div>
                    <button className='homepage_button' onClick={this.minclick}>완료</button>
                </div>

                
            </div>
        );
    }
}



export default Reservepage;