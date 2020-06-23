import React, { Component } from 'react';
import './Ceoservice_module.css';

class MenuPrice extends Component {
  state = {
    price: ''
  }
  handleChange = (e) => {
    this.setState({
      price: e.target.value
    })
   
  }


  handleClick = () =>{
    console.log(this.state);
    this.props.price(this.state.price)
   
    
};


  render() {
    return (
  <div>
      <h3>- 가격</h3>
        <input
          placeholder="가격"
          value={this.state.price}
          onChange={this.handleChange}
        />
       
      <button className='homepage_click_bt' onClick={this.handleClick} >click</button>

      </div>
    );
  }
}

export default MenuPrice;