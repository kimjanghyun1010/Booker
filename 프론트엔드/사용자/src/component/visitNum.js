import React, { Component } from 'react';
import './visitNum.css';
import UserReg from '../page/userReg'
export default class VisitNum extends Component {
  constructor(props){
    super(props)
      this.state = {
        visit :'',
      }
    
  }
  handleChange = (e) => {
    	e.preventDefault();
    this.setState({
      visit: e.target.value
    })
    this.props.onChange(e.target.value);

  }


  handleClick = () =>{
    console.log(this.state.visit);
    this.setState({visit: ' '});
    
};

  render() {
    return (
      <div className="visit_cont">
        
        
              <input
            className="visit_num"
              placeholder="인원수"
              value={this.state.visit}
              onChange={this.handleChange}

            />

      
 

         
      </div>
      
    );
  }
}

