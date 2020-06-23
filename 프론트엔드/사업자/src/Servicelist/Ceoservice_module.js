import React, { Component } from 'react';

import CalendarSwitch from './calendarToggle';
import Time from './time'
import Time2 from './time2';
import MenuName from './menuName';
import MenuPrice from './menuPrice';
import Menuimageup from './Menuimageup';
import CommentSwitch from './commentToggle';
import ImageUpload from './ImageUpload.js';
import './Ceoservice_module.css';
import Comment from './comment.js';
import { post } from 'axios';




class Ceoservice_module extends Component {

    state={
        menuname:'',
        menuprice:'',
        menuimg:'',
        comment:'',
    }
    minclick = () => {
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            menuname:'',
            menuprice:'',
            menuimg:'',
            comment:'',

        })
        alert("서비스 등록 \n완료되었습니다.")
        window.opener.location.href = `${window.opener.location.href}`;
        window.close()
        

    }


    addCustomer = () => {
        const url = `http://52.79.100.159:8080/api/best_menu`;
        const data = {
            storeNumber:this.props.match.params.storenumber,
            serviceName: this.state.menuname,
            servicePrice: this.state.menuprice,
            
            serviceExplanation: this.state.comment,

        };
        const header = {
            'Content-Type': 'application/json'
        };
        return post(url, data, header);
    }

    uploadmenuname = (text) => {
        this.setState({
            menuname: text,
        })
        
    }

    uploadmenuprice =(text)=>{
        this.setState({
            menuprice: text,
        })

    }

    uploadmenuimg =(text)=>{
        this.setState({
            menuimg: text,
        })
    }

    uploadmenucomment =(text)=>{
        this.setState({
            comment: text,
        })
    }

   
    
        


    render() {
        console.log(this.state);
        const { params } = this.props.match;
        console.log(this.props.match.params.storenumber);
        console.log(window.opener.location);
        
        return (
            <div className='mou_box'>
                <div className='mou_title'>
                    서비스 등록
                </div>

                <div className='module_box'>
                    <div>
                        <MenuName name={this. uploadmenuname}/>
                    </div>
                    <div>
                        <MenuPrice price={this.uploadmenuprice} />
                    </div>
                    <div>
                        <Menuimageup   img={this.uploadmenuimg} />
                    </div>
                    <div>
                        <Comment  comment={this.uploadmenucomment}/>
                    </div>
                    <button id='finish' onClick={this.minclick}>완료</button>
                </div>
            </div>


        );
    }
}



export default Ceoservice_module;