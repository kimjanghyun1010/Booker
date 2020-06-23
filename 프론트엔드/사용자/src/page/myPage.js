import React, { Component } from 'react';
import './myPage.css';
import Header from './header/mainHeader';

import MyTableApp from '../components/myTableApp'
class MyPage extends Component {





    
    render() {



        return (
            <div id="contents">
                <div id="cont_cont">
                    <div className="header">
                    <Header/>
                    </div>
                        <div className="store_main_container">
                       
                            <div id="parallax-world-of-uggr">
                 
                        

                                <section>
                                    <div class="parallax-one-mypage">
                                        <div className="user_reg_check_cont">
                                    <h4 className="user_reg_check">예약 확인</h4>
                                    </div>
                                        <div className="mypage_back">
                                        <MyTableApp   />
                                        </div>
                                    </div>
                                        
                                </section>

                                
                            </div>
                        </div>

                </div>
            </div>
        );
    }
}

export default MyPage;