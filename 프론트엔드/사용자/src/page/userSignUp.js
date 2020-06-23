import React, { Component } from 'react';
import './userSignUp.css';
import { post } from 'axios';

import {Link} from 'react-router-dom'

class UserSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_store: false,
            user_name: '',
            user_phone: '',
            user_id: '',
            password: '',
            user_email :'' ,
        
        };
      }


      handleChangeName = (e) => {
    	e.preventDefault();
         this.setState({
            user_name: e.target.value,
      
    })
  }

  handleChangePhone = (e) => {
    e.preventDefault();
     this.setState({
        user_phone: e.target.value,
})
}

handleChangeId = (e) => {
    e.preventDefault();
     this.setState({
        user_id: e.target.value,
  
})

}

handleChangePwd = (e) => {
    e.preventDefault();
     this.setState({
        password: e.target.value,
  
})

}

handleChangeEmail = (e) => {
    e.preventDefault();
     this.setState({
        user_email: e.target.value,
  
})
 
}

  
  handleClick = () =>{
    console.log(this.state)
    this.addCustomer();
  
};


addCustomer =() => {
    const url = 'http://52.79.100.159:8081/api/users';
    const data = {
        is_store:this.state.is_store,
        password: this.state.password,
        user_email: this.state.user_email,
        user_id:this.state.user_id,
        user_name: this.state.user_name,
        user_phone: this.state.user_phone
    };
    const header = {
        'Content-Type': 'multipart/form-data'
    };
    console.log(this.state.is_store);
    console.log(this.state.password);
    console.log(this.state.user_email);
    console.log(this.state.user_id);
    console.log(this.state.user_name);
    console.log(this.state.user_phone);
  
    return post(url,data, header);
}


//false 일반 true 사업자
optionchange1 = () => {
    this.setState({
        is_store:false,
    });
    console.log(this.state.is_store)

}

optionchange2 = () => {
    this.setState({
        is_store:true,
    });
    console.log(this.state.is_store)
}
    
    render() {
      
        return (
            <div className="sign_cont">
                    <div className="empty">
                    </div>                 
                 <div className="sign_cont_cont">
                       
                        <h1 className="booker_logo">Booker</h1>
       
                           <div className="one">

                            <div className="two1">
                                <div className="log_radio_text1">
                                일반사용자 
                                </div>  
                                <input  className='check_box1' type="radio" value="false" checked={this.state.is_store === false}  onChange={ this.optionchange1 }/> 
                            </div>
                            <div className="two2">
                                <div className="log_radio_text1">
                                사업자 
                                </div>  
                                <input  className='check_box2' type="radio" value="true" checked={this.state.is_store === true}   onChange={ this.optionchange2 }/> 
                            </div>
                        </div>

                        




                    <div className="sign_logo">
                        <div className="sign_name">
                            <input className="sign_name_input" value={this.state.name} onChange={this.handleChangeName} placeholder="NAME"  />
                        </div>

                        <div className="sign_phone">
                            <input className="sign_phone_input" value={this.state.phone_num} onChange={this.handleChangePhone} placeholder="PHONE_NUMBER"  />
                            
                        </div>


                        <div className="sign_pwd_btn">
                            <input className="sign_id_input"  value={this.state.Id} onChange={this.handleChangeId}  placeholder="ID"  />
                        
                            <button className="overlap_check">중복 확인</button>
                        </div>

                        <div className="sign_pwd">
                            <input className="sign_pwd_input" type="password"  value={this.state.pwd} onChange={this.handleChangePwd}  placeholder="PWD"  />
                        </div>

                        <div className="sign_pwd">
                            <input className="sign_pwdcheck_input" type="password"   placeholder="PWDCHECK"  />
                        </div>

                        <div className="sign_pwd_btn">
                            <input className="sign_email_input"  value={this.state.email} onChange={this.handleChangeEmail}  placeholder="EMAIL"  />
                            <button className="overlap_check">중복 확인</button>
                        </div>

                        

                        


                        <div className="sign_join">
                        <Link to='/login'><button className="sign_join_btn" onClick={this.handleClick}>회원가입</button> </Link>
                        </div>

                    </div>

                    
                </div> 


            
                 
            </div>
        );
    }
}

export default UserSignUp;