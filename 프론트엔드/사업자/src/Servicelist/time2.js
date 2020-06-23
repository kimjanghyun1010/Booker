import React,{Component} from 'react';
import TimePicker from 'react-time-picker';
import './Ceohompage.css';

class Time2 extends Component {
  state = {
    time: '22:00',
 

  }
 
  onChange = time => {
      this.setState({ time })
     
    } ;

handleClick = () =>{
    console.log(this.state);
    this.props.time(this.state.time);
};


  render() {
    return (
      <div>
        <TimePicker
          onChange={this.onChange}
          value={this.state.time}
        />
        <button className='homepage_click_bt' onClick={this.handleClick} >click</button>
  
      </div>
      
    );
  }
}
export default Time2;