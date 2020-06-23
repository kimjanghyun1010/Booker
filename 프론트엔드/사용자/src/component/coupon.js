import React, { Component } from 'react';
import './coupon.css';



class Coupon extends Component {
  constructor(props){
    super(props)
      this.state = {
        coupon :'',
      }
    
  }
  handleChange = (e) => {
    this.setState({
      coupon: e.target.value
    })
  }


  handleClick = () =>{
    console.log(this.state.coupon);
    this.setState({coupon: ' '});
    
};


  render() {
    return (
      <div className="coupon_cont">
         <input 
         className="coupon_num"
          placeholder="쿠폰번호"
          value={this.state.coupon}
          onChange={this.handleChange}
        />
       
        <button className="coupon_btn" onClick={this.handleClick} >확인</button>

      </div>
    );
  }
}

export default Coupon;