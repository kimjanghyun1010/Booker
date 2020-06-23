import React, { Component } from 'react';
import './login.css';


import {Link} from 'react-router-dom'

class Login extends Component {





    render() {


       


        return (
            <div className="login_cont">


                    <div className="empty">
                          
                    </div>



                    
                 <div className="login_cont_cont">
            
                    <div className="login_logo">

                    <div>
                                <h1>Booker</h1>
                            
                            </div>
                            <div className="small_logo">
                                <h6 >통합 예약 플렛폼</h6>
                            </div>
                        
                        <div className="login_id">
                            <input className="login_id_input" placeholder="ID"  />
                        </div>


                        <div className="login_pwd">
                            <input className="login_pwd_input" type="password"  placeholder="PWD"  />
                        </div>

                        <div className="login_check">
                            <Link to='/'><button className="login_check_btn">로그인</button></Link>
                        </div>

                        <div className="login_join">

                        <Link to='/signup'><button className="login_join_btn">회원가입</button> </Link>
                        </div>

                    </div>

                    
                </div> 


            
                 
            </div>
        );
    }
}

export default Login;