import React, { Component } from 'react';
import './olayout.css';
import Header from './header/mainHeader';

import SearchBar from '../components/searchBar';


import UserTabs from '../components/usertabs';


class Olayout extends Component {


    scrollUp=() =>{
        window.scrollBy({
                 top:-10000,   
            behavior: 'smooth'
          });
      }

      
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
                                    <div class="title">
                                        <div className="search_bar_back">
                                            <div className="search_bar">
                                                <SearchBar/>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <div class="parallax-one">
                                        <div className="tab_back">
                                    <UserTabs/>
                                    </div>
                                    </div>
                                        
                                </section>

                                <section>
                                <button onClick={this.scrollUp} className="top_btn">TOP</button>
                                <h4 className="store_intro">부커 소개</h4>
                   
                                {/* <div class="block">
                                <p><span class="first-character sc">I</span>
                                  <div className="first_story_font">예약하고 시간 얻으세요</div>
                                </p>
                                <p class="line-break margin-top-10"></p>
                                <p class="margin-top-10"><div className="second_story_font">가입 한번으로 다양한 업종예약을 누릴 수 있습니다</div> </p>
                                <p class="margin-top-10"><div className="second_story_font">&nbsp;</div> </p>
                                <p class="margin-top-10"><div className="second_story_font">문화생활의 질이 향상됩니다</div> </p>
                                <p class="margin-top-10"><div className="second_story_font"> &nbsp;  </div> </p>
                                <p class="margin-top-10"><div className="second_story_font"> 1분동안 예약하면 웨이팅 30분 아낄 수 있습니다  </div> </p>
                                
                                </div> */}




                                <div className="booker_info_box">

                                    <div className="booker_info_box4">
                                            <div className="reserve_icon">
                                                
                                            </div>
                                            <p class="margin-top-10"><div className="second_story_font"> 통합 예약 플렛폼 </div> </p>
                                    </div>





                                    <div className="booker_info_box1">
                                            <div className="book_icon">
                                                
                                            </div>
                                            <p class="margin-top-10"><div className="second_story_font">가입 한번으로 누리는 다양한 업종예약</div> </p>
                                    </div>

                                    <div className="booker_info_box2">
                                            <div  className="up_icon" >
                                                
                                            </div>
                                            <p class="margin-top-10"><div className="second_story_font">문화생활의 질이 향상</div> </p>
                                    </div>


                                    <div className="booker_info_box3">
                                            <div className="time_icon">
                                                
                                            </div>
                                            <p class="margin-top-10"><div className="second_story_font"> 웨이팅을 최소화한 시간 절약  </div> </p>
                                    </div>




                                </div>




                                </section>

                                <section>
                                <div class="parallax-two">
                                    <h2>BOOKER</h2>
                                </div>
                                </section>

                                <section>
                                <button onClick={this.scrollUp} className="top_btn">TOP</button>
                                <h4 className="store_intro">이용방법</h4>
                             



                                <div className="booker_use_box">

                    <div className="booker_info_box1">
                            <div className="first_icon">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    STEP.01 &nbsp;&nbsp;>
                            </div>
                            <p class="margin-top-10"><div className="second_story_font">원하는 업종선택</div> </p>
                    </div>





                    <div className="booker_info_box2">
                            <div className="second_icon">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    STEP.02  &nbsp;&nbsp;>
                            </div>
                            <p class="margin-top-10"><div className="second_story_font"> 업체 선택 </div> </p>
                    </div>

                    <div className="booker_info_box3">
                            <div  className="third_icon" >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     STEP.03  &nbsp;&nbsp;>
                            </div>
                            <p class="margin-top-10"><div className="second_story_font">예약 정보 작성 </div> </p>
                    </div>


                    <div className="booker_info_box4">
                            <div className="fourth_icon">
                            STEP.04
                            </div>
                            <p class="margin-top-10"><div className="second_story_font"> 예약 완료 </div> </p>
                    </div>




                    </div>




                                </section>

                                <section>
                                <div class="parallax-three">
                                    <h2>HOW TO USE</h2>
                                </div>
                                </section>

                                <section>
                                <button onClick={this.scrollUp} className="top_btn">TOP</button>
                                <h4 className="store_intro">이벤트</h4>
                           





                                {/* <p class="margin-top-10"><div className="second_story_font"><br></br><br></br>첫예약 3천원 할인</div> </p>
                                <p class="margin-top-10"><div className="second_story_font">&nbsp;</div> </p>
                                <p class="margin-top-10"><div className="second_story_font">친구초대시 5천원 할인</div> </p>
                                <p class="margin-top-10"><div className="second_story_font">&nbsp;   </div> </p>
                                <p class="margin-top-10"><div className="second_story_font">부커포인트 2배 적립 </div> </p>
 */}



<div className="booker_event_box">






        <div className="booker_event_box1">
                <div className="event_icon1">
                    
                </div>
                <p class="margin-top-10"><div className="second_story_font">친구초대시 5천원 할인</div> </p>
        </div>

        <div className="booker_event_box2">
                <div  className="event_icon2" >
                    
                </div>
                <p class="margin-top-10"><div className="second_story_font">부커포인트 2배 적립</div> </p>
        </div>


        <div className="booker_event_box3">
                <div className="event_icon3">
                    
                </div>
                <p class="margin-top-10"><div className="second_story_font">첫예약 3천원 할인</div> </p>
        </div>



</div>










                                </section>
                                <section>
                                <div class="parallax-four">
                                    <h2>EVENT</h2>
                                </div>
                                </section>
                                
                              
                                

                            </div>
                        </div>

                </div>
            </div>
        );
    }
}

export default Olayout;