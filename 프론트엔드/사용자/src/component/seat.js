import React, { Component } from 'react';
import './seat.css';



class Seat extends Component {
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
       
       <div className="select_seat">

<button className="select_seat_btn1">&nbsp;</button>
<button className="select_seat_btn1">&nbsp;</button>
<button className="select_seat_btn">&nbsp;</button>
<button className="select_seat_btn">&nbsp;</button>
<button className="select_seat_btn">&nbsp;</button>
<button className="select_seat_btn">&nbsp;</button>
<button className="select_seat_btn">&nbsp;</button>
<button className="select_seat_btn">&nbsp;</button>

       </div>

      </div>
    );
  }
}

export default Seat;