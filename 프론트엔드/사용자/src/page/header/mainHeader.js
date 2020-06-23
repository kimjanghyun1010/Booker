import React, {Component} from 'react';
import './mainHeader.css';

import {Link} from 'react-router-dom'


let a = 0;


class Header extends Component {

    
    scrollInfo=() =>{
        window.scrollBy({
            top: 1500,         
            behavior: 'smooth'
          });
      }


      scrollReg=() =>{
        window.scrollBy({
            top: 2800,         
            behavior: 'smooth'
          });
      }
    

      scrollEvent=() =>{
        window.scrollBy({
            top: 4050,         
            behavior: 'smooth'
          });
      }

    render(){

        if(a===1){

            return (
                <div className="main_header">
                    <div className="logobox">
                    <Link to="/"  >  <button className="logoboxbtn">Booker</button> </Link>
                    </div>

                    <div className="catalog">
                        <div className="catalog1">
                        <button onClick={this.scrollInfo} className="catalogbtn">부커소개</button>
                        
                        </div>
        
                        <div className="catalog2">
                        <button   onClick={this.scrollReg}className="catalogbtn">이용방법</button>
                        </div>

                        <div className="catalog3">
                        <button onClick={this.scrollEvent} className="catalogbtn">이벤트</button>
                        </div>
                        <div className="catalog4">
                            <div className="hearder-nav">
                                <div className="dropdown">
                                <button className="catalogbtn">....</button>
                                    <div className="dropdown-content">
                                        <a href="!#">추후</a>
                                        <br/>
                                        <br/>
                                        <a href="!#">추후</a>
                                        <br/>
                                        <br/>
                                        <a href="!#">추후</a>
                                        <br/>
                                        <br/>
                                        <a href="!#">추후</a>
                                </div>
                                </div>
                            </div>
                        </div>   
                    </div>

                    <div className="btn_login">
                    <Link to="/login"><h5>로그인</h5> </Link>
                    </div>

                    <div className="btn_signUp">
                    <Link to="/signup"><h3>회원가입</h3> </Link>
                    </div>
                </div>
            );
        }

        else{
            return (
                <div className="main_header">
                    <div className="logobox">
                    <Link to="/"  >  <button className="logoboxbtn">Booker</button> </Link>
                    </div>

                    <div className="catalog">
                        <div className="catalog1">
                        <button onClick={this.scrollInfo} className="catalogbtn">부커소개</button>
                        
                        </div>
        
                        <div className="catalog2">
                        <button   onClick={this.scrollReg}className="catalogbtn">이용방법</button>
                        </div>

                        <div className="catalog3">
                        <button onClick={this.scrollEvent} className="catalogbtn">이벤트</button>
                        </div>
                        <div className="catalog4">
                            <div className="hearder-nav">
                                <div className="dropdown">
                                <button className="catalogbtn">....</button>
                                    <div className="dropdown-content">
                                        <a href="!#">추후</a>
                                        <br/>
                                        <br/>
                                        <a href="!#">추후</a>
                                        <br/>
                                        <br/>
                                        <a href="!#">추후</a>
                                        <br/>
                                        <br/>
                                        <a href="!#">추후</a>
                                </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div className="btn_logout">
                    <Link to="/nouser"><h5>로그아웃</h5> </Link>
                    </div>

                    <div className="btn_mypage">
                    <Link to="/mypage"><h5>마이페이지</h5> </Link>
                    </div>

                    <div className="btn_ceo">
                    <a href='http://localhost:3001/mskjh7'><h5>사장님광장</h5></a>
                    </div>

                    

                    
                </div>
            );
        }
    }
}

export default Header;