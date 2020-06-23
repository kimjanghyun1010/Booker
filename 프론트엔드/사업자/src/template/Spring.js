import React, { Component } from 'react';
import './Spring.css';
class Spring extends Component {



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
        <div className="store2_header">
     
           </div>
                    <div className="store2_main_container">
                                        
                    <div id="parallax2-world-of-ugg">
{/*                             
                            <section>
                            <div class="title">
                           
                                
                            </div>
                            </section> */}

                            <section>
                                
                                <div class="parallax-one-store2-spring">
                                
                                <div className="top_text_margin">
                                    <h2>    Spring</h2>
                                
                                </div>
                                <button className =" store2_reg_btn">RESERVATION</button>
                                </div>
                            <div>
                            </div>

                            
                            <section >
                            <div className="store2_intro">
                            <div className="store2_intro_empty">ㅡ  </div>
                                <div className="store2_intro_text"><h4>업체 소개

                                <button onClick={this.scrollUp} className="top_btn">TOP</button>
                                </h4>
                               
                                </div>
                            </div>
                            {/* <div class="block">
                             
                                <p><span class="first-character sc">I</span>사장님의 운영 철칙이나 창업계기 등 사장님 소개글</p>
                                <p class="line-break margin-top-10"></p>
                                <p class="margin-top-10">업체 소개, 업체 이야기 </p>
                                <p class="margin-top-10">업체 소개, 업체 이야기 </p>
                                <p class="margin-top-10">업체 소개, 업체 이야기 </p>
                                <p class="margin-top-10">업체 소개, 업체 이야기 </p>
                                <p class="margin-top-10">업체 소개, 업체 이야기 </p>
                            </div> */}
                            </section>
                            <section>
                            <div class="parallax2-two-spring">
                                
                                <div>
                                    <h2 className="left">INFO</h2>
                                </div>
                                <div className="store_info_textbox" >
                                  <h4 className="store_info_title">TITLE</h4>
                                  <h6 className="store_info_infotext">
                                  업체 소개, 업체 이야기
                                  </h6>
                                </div>

                            </div>
                            </section>



                            

                            <section>
                            <h4 className="store2_intro">
                            <div className="store2_intro_empty">ㅡ  </div>
                                <div className="store2_intro_text">서비스
                                <button onClick={this.scrollUp} className="top_btn">TOP</button>
                                </div>
                            
                            </h4>
                            {/* <div class="block">
                                <p><span class="first-character ny">I</span>대표 서비스</p>
                                <p class="line-break margin-top-10"></p>
                                <p class="margin-top-10">대표 서비스 소개</p>
                                <p class="margin-top-10">대표 서비스 소개</p>
                                <p class="margin-top-10">대표 서비스 소개</p>
                                <p class="margin-top-10">대표 서비스 소개</p>
                                <p class="margin-top-10">대표 서비스 소개</p>
                            </div> */}
                            </section>

                            <section>
                            <div class="parallax2-three-spring">
                            <div>
                                    <h2 className="left1">SERVICE</h2>
                                </div>
                                <div className="store_info_textbox" >
                                  <h4 className="store_info_title">SERVICE</h4>
                                  <h6 className="store_info_infotext">
                                  서비스 소개
                                  </h6>
                                </div>
                            </div>
                            </section>

                            <section>
                            <h4 className="store2_intro">
                            <div className="store2_intro_empty">ㅡ  </div>
                                <div className="store2_intro_text">업체 위치
                                <button onClick={this.scrollUp} className="top_btn">TOP</button>
                                </div>
                            
                            </h4>
                           
                            </section>



                             <section>
                           
                         
                           

                         
                            </section>
                            
                            <section>
                            <div class="block">
                               
                            </div>
                            </section>
                            </section>

                            </div>
                        </div>

                </div>
            </div>
        );
    }
}

export default Spring;