import React, { Component } from 'react';
import './userReg.css';
import {Link} from 'react-router-dom'

import StoreHeader from './header/storeHeader';

import NewCalendar from '../component/newCalendar';

import { post } from 'axios';
import Time from '../component/time';

import VisitNum from '../component/visitNum';
import Coupon from '../component/coupon';

import Seat from '../component/seat';




class UserReg extends Component {
    constructor(props){
        super(props)
          this.state = {
            semicategory: '',
            explaination: '',
          
            storeImage5:'',
            storeImage6:'',

            storeNumber:'',
            regDate:'',
            regTime:'',
            regVisitNum :'' ,
            regName:'',
            regPhone:'',
            bookYear:'',
            bookMonth:'',
            bookDay:'',
            coupon:'',
            seat:'',
          }     
      }
   




      componentDidMount() {
        this.callApi()
           
    }

    callApi = () => {
        fetch('http://52.79.100.159:8081/api/store_list')
        .then(response => response.json())
        .then(body => {
            this.setState({ 
    
                storeImage5: body[0].storeImage5,
                storeImage6 :body[0].storeImage6,
                store_explanation : body[0].store_explanation,
                coupon : body[0].store_coupon,
                seat : body[0].store_seat,
                storeNumber :body[0].storeNumber
                //store.coupon
                
           
             });
        })
        .catch(error => console.log(error));
        console.log(this.state.storeImage5)
        console.log(this.state.storeImage6)
        console.log(this.state.store_explanation)
        console.log(this.state.coupon)
        console.log(this.state.seat)
        console.log(this.state.storeNumber)
        
    }



   
      onChangeVisit = regVisitNum =>{
          this.setState({regVisitNum:regVisitNum})

          const {params} = this.props.match;
          console.log(params)
       
          console.log(params.storeName)
          this.setState({
              storeName: params.storeName
          })
  
          console.log(this.state.storeName)

          console.log(regVisitNum);


          console.log(this.state.regDate.substr(4,2))
          this.setState({
              bookMonth:  this.state.regDate.substr(4,2)
          })



      }
      
      

      onChangeTime = regTime =>{
        this.setState({regTime:regTime})
        console.log(regTime);
    }
    
    
    onChangeCalendar = regDate =>{
        this.setState({regDate:regDate})
       
        console.log(regDate);
    }

    onChangeCalendarMonth = bookMonth=>{
        this.setState({bookMonth:bookMonth})
        console.log(bookMonth);
    }


        
    handleChangeRegName = (e) => {
    	e.preventDefault();
    this.setState({
        regName: e.target.value
    })
   

  }


  handleChangeRegPhone = (e) => {
    e.preventDefault();
    this.setState({
    regPhone: e.target.value
})


}
    
    
    handleClick = () =>{
        console.log(this.state)

   
     

        this.addCustomer(); 
    };
  
    
    addCustomer =() => {
        const url = 'http://52.79.100.159:8082/api/book_table';
        const data = {
            bookDate: this.state.regDate,
            book_time: this.state.regTime,
            book_num_of_people:this.state.regVisitNum,
            user_name: this.state.regName,
            booker_phone: this.state.regPhone,
            storeName: this.state.storeName,
            bookMonth:this.state.bookMonth,
            storeNumber:this.state.storeNumber

        };
        const header = {
            'Content-Type': 'multipart/form-data'
        };
        console.log(this.state.regDate);
        console.log(this.state.regTime);
        console.log(this.state.regVisitNum);
        console.log(this.state.regName);
        console.log(this.state.regPhone);
        console.log(this.state.storeName);
        console.log(this.state.bookMonth);
        console.log(this.state.storeNumber)
      
        return post(url,data, header);
    }


 /*   handleFormSubmit = (e) =>{
        e.preventDefault()
        this.addCustomer(this.state.file)
            .then((response) => {
                console.log(response.data);
        })
        this.setState =({

            regDate:'',
            regTime:'',
            regVisitNum :'' ,
            regName:'',
            regPhone:'',
          }  )
    }*/





    render() {
        console.log(this.state.storeNumber)

//쿠폰사용이 0

        const {params} = this.props.match;

     
        if(this.state.coupon==='0'&& this.state.seat==='0'){
        return (
            <div id="contents">
                <div id="cont_cont">
                    <div className="store_container">
                        <StoreHeader />
                        <div className="cont">
                            <div className="reg_cont1" >
                                <h3 className="reg_cont1_text">{params.storeName} > 예약하기</h3>
                            </div>

                            <div className="reg_cont2n2">

                                <div className="reg_cont2" >
                                    <div className="reg_image_cont"  >
                                        <img className="reg_image2" src={this.state.storeImage5} />
                                    </div>
                                  
                                </div>


                                <div className="reg_cont2" >
                                    <div className="reg_image_cont">
                                        <img className="reg_image3" src={this.state.storeImage6} />
                                    </div>
                                  
                                </div>

                            </div>

                    <div className="reg_cont3n3">
                            <div className="reg_cont3" >
                                <div className="reg_calendar" >
                                    <div className="reg_calendar_cont">
                                    <NewCalendar onChange={this.onChangeCalendar} />
                                    </div>
                                </div>
                                <div className="reg_time" >
                                        <h3 className="reg_module_tag">시간</h3>
                                        <Time onChange={this.onChangeTime} /> 
                                    </div>    
                            </div>

                                <div className="reg_cont3_1" >
                                    <div className="reg_visitnum" >
                                        <h3 className="reg_module_tag">예약 인원수</h3>
                                        <VisitNum onChange={this.onChangeVisit} />
                                   
                                    </div>

        

                                    <div className="reg_module_yet" >
                                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div>-기능 준비중-</div>
                                        
                                    </div>



                                    <div className="reg_userinfo" >
                                        <h3 className="reg_module_tag">예약자 정보</h3> 
                                        <div className="reg_userinfo_people">
                                            예약자 :&nbsp;
                                            <input
                                            className="input_username"
                                            placeholder="예약자 이름"
                                            value={this.state.regName}
                                            onChange={this.handleChangeRegName}
                                        />
                                    </div>

                                    <div  className="reg_userinfo_people">
                                        연락처 :&nbsp;
                                        <input
                                        className="input_username"
                                        placeholder="예약자 연락처"
                                        value={this.state.regPhone}
                                        onChange={this.handleChangeRegPhone}
                                        />
                                    </div>
                                    </div>


                                    <div className="reg_bookerinfo" >
                                        <button className="reg_use_rule">이용 약관</button>
                                    </div>

                                    <div className="reg_agreement" >
                                        <Link to='/' >  <button className="reg_check_btn"  onClick={this.handleClick}> 예약하기</button></Link> 
                                    </div>
                                </div>

                    </div>


                        </div>
                    </div>
                </div>
            </div>
        
        );
        }

        else if(this.state.coupon==='1'&& this.state.seat==='0'){
            return (
                <div id="contents">
                    <div id="cont_cont">
                        <div className="store_container">
                            <StoreHeader />
                            <div className="cont">
                                <div className="reg_cont1" >
                                    <h3 className="reg_cont1_text">{params.storeName} > 예약하기</h3>
                                </div>
                                <div className="reg_cont2n2">
    
                                    <div className="reg_cont2" >
                                        <div className="reg_image_cont">
                                            <img className="reg_image2" src={this.state.storeImage5} />
                                        </div>
                                      
                                    </div>
    
    
                                    <div className="reg_cont2" >
                                        <div className="reg_image_cont">
                                            <img className="reg_image3" src={this.state.storeImage6} />
                                        </div>
                                      
                                    </div>
                                </div>
    
                        <div className="reg_cont3n3">
                                <div className="reg_cont3" >
    
                                    <div className="reg_calendar" >
                                        <div className="reg_calendar_cont">
                                        <NewCalendar onChange={this.onChangeCalendar} />
                                        </div>
                                      
                                    </div>
                                    <div className="reg_time" >
                                            <h3 className="reg_module_tag">시간</h3>
                                            <Time onChange={this.onChangeTime} />
                                           
                                        </div>
                                    
                                </div>
    
                                    <div className="reg_cont3_1" >
                                        
    
                                        <div className="reg_visitnum" >
                                            <h3 className="reg_module_tag">예약 인원수</h3>
                                            <VisitNum onChange={this.onChangeVisit} />
                                       
                                        </div>
    
                                        <div className="reg_module" >
                                        <h3 className="reg_module_tag">쿠폰</h3>
                                        <Coupon/>
                                    </div>

    
    
                                        <div className="reg_module_yet" >
                                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div>-기능 준비중-</div>
                                            
                                        </div>
    
    
    
                                        <div className="reg_userinfo" >
                                            <h3 className="reg_module_tag">예약자 정보</h3> 
                                            <div className="reg_userinfo_people">
                                                예약자 :&nbsp;
                                                <input
                                                className="input_username"
                                                placeholder="예약자 이름"
                                                value={this.state.regName}
                                                onChange={this.handleChangeRegName}
                                            />
                                        </div>
    
                                        <div  className="reg_userinfo_people">
                                            연락처 :&nbsp;
                                            <input
                                            className="input_username"
                                            placeholder="예약자 연락처"
                                            value={this.state.regPhone}
                                            onChange={this.handleChangeRegPhone}
                                            />
                                        </div>
                                        </div>
    
    
                                        <div className="reg_bookerinfo" >
                                            <button className="reg_use_rule">이용 약관</button>
                                        </div>
    
                                        <div className="reg_agreement" >
                                            <Link to='/' >  <button className="reg_check_btn"  onClick={this.handleClick}> 예약하기</button></Link> 
                                        </div>
                                    </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                );
            }



            else if(this.state.coupon==='0'&& this.state.seat==='1'){
                return (
                    <div id="contents">
                        <div id="cont_cont">
                            <div className="store_container">
                                <StoreHeader />
                                <div className="cont">
                                    <div className="reg_cont1" >
                                        <h3 className="reg_cont1_text">{params.storeName} > 예약하기</h3>
                                    </div>
                                    <div className="reg_cont2n2">
        
                                        <div className="reg_cont2" >
                                            <div className="reg_image_cont">
                                                <img className="reg_image2" src={this.state.storeImage5} />
                                            </div>
                                          
                                        </div>
        
        
                                        <div className="reg_cont2" >
                                            <div className="reg_image_cont">
                                                <img className="reg_image3" src={this.state.storeImage6} />
                                            </div>
                                          
                                        </div>
                                    </div>
        
                            <div className="reg_cont3n3">
                                    <div className="reg_cont3" >
        
                                        <div className="reg_calendar" >
                                            <div className="reg_calendar_cont">
                                            <NewCalendar onChange={this.onChangeCalendar} />
                                            </div>
                                          
                                        </div>
                                        <div className="reg_time" >
                                                <h3 className="reg_module_tag">시간</h3>
                                                <Time onChange={this.onChangeTime} />
                                               
                                            </div>
                                        
                                    </div>
        
                                        <div className="reg_cont3_1" >
                                            
        
                                            <div className="reg_visitnum" >
                                                <h3 className="reg_module_tag">예약 인원수</h3>
                                                <VisitNum onChange={this.onChangeVisit} />
                                           
                                            </div>
        
                                            <div className="reg_seatmodule" >
                                        <h3 className="reg_module_seattag">좌석</h3>
                                        <Seat/>
                                    </div>

        
        
                                            <div className="reg_module_yet" >
                                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div>-기능 준비중-</div>
                                                
                                            </div>
        
        
        
                                            <div className="reg_userinfo" >
                                                <h3 className="reg_module_tag">예약자 정보</h3> 
                                                <div className="reg_userinfo_people">
                                                    예약자 :&nbsp;
                                                    <input
                                                    className="input_username"
                                                    placeholder="예약자 이름"
                                                    value={this.state.regName}
                                                    onChange={this.handleChangeRegName}
                                                />
                                            </div>
        
                                            <div  className="reg_userinfo_people">
                                                연락처 :&nbsp;
                                                <input
                                                className="input_username"
                                                placeholder="예약자 연락처"
                                                value={this.state.regPhone}
                                                onChange={this.handleChangeRegPhone}
                                                />
                                            </div>
                                            </div>
        
        
                                            <div className="reg_bookerinfo" >
                                                <button className="reg_use_rule">이용 약관</button>
                                            </div>
        
                                            <div className="reg_agreement" >
                                                <Link to='/' >  <button className="reg_check_btn"  onClick={this.handleClick}> 예약하기</button></Link> 
                                            </div>
                                        </div>
        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    );
                }



                else{
                return (
                    <div id="contents">
                        <div id="cont_cont">
                            <div className="store_container">
                                <StoreHeader />
                                <div className="cont">
                                    <div className="reg_cont1" >
                                        <h3 className="reg_cont1_text">{params.storeName} > 예약하기</h3>
                                    </div>
                                    <div className="reg_cont2n2">
        
                                        <div className="reg_cont2" >
                                            <div className="reg_image_cont" >
                                                <img className="reg_image2" src={this.state.storeImage5} />
                                            </div>
                                          
                                        </div>
        
        
                                        <div className="reg_cont2" >
                                            <div className="reg_image_cont">
                                                <img className="reg_image3" src={this.state.storeImage6} />
                                            </div>
                                          
                                        </div>
                                    </div>
        
                            <div className="reg_cont3n3">
                                    <div className="reg_cont3" >
        
                                        <div className="reg_calendar" >
                                            <div className="reg_calendar_cont">
                                            <NewCalendar onChange={this.onChangeCalendar} />
                                            </div>
                                          
                                        </div>
                                        <div className="reg_time" >
                                                <h3 className="reg_module_tag">시간</h3>
                                                <Time onChange={this.onChangeTime} />
                                               
                                            </div>
                                        
                                    </div>
        
                                        <div className="reg_cont3_1" >
                                            
        
                                            <div className="reg_visitnum" >
                                                <h3 className="reg_module_tag">예약 인원수</h3>
                                                <VisitNum onChange={this.onChangeVisit} />
                                           
                                            </div>
        
                                            <div className="reg_module" >
                                        <h3 className="reg_module_tag">쿠폰</h3>
                                        <Coupon/>
                                    </div>
                                    <div className="reg_seatmodule" >
                                        <h3 className="reg_module_seattag">좌석</h3>
                                      <Seat/>
                                    </div>
        
        
                                            <div className="reg_module_yet" >
                                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div>-기능 준비중-</div>
                                                
                                            </div>
        
        
        
                                            <div className="reg_userinfo" >
                                                <h3 className="reg_module_tag">예약자 정보</h3> 
                                                <div className="reg_userinfo_people">
                                                    예약자 :&nbsp;
                                                    <input
                                                    className="input_username"
                                                    placeholder="예약자 이름"
                                                    value={this.state.regName}
                                                    onChange={this.handleChangeRegName}
                                                />
                                            </div>
        
                                            <div  className="reg_userinfo_people">
                                                연락처 :&nbsp;
                                                <input
                                                className="input_username"
                                                placeholder="예약자 연락처"
                                                value={this.state.regPhone}
                                                onChange={this.handleChangeRegPhone}
                                                />
                                            </div>
                                            </div>
        
        
                                            <div className="reg_bookerinfo" >
                                                <button className="reg_use_rule">이용 약관</button>
                                            </div>
        
                                            <div className="reg_agreement" >
                                                <Link to='/' >  <button className="reg_check_btn"  onClick={this.handleClick}> 예약하기</button></Link> 
                                            </div>
                                        </div>
        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    );
                }








        }


        





    
}

export default UserReg;