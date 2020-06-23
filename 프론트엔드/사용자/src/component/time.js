import React,{Component} from 'react';
import TimePicker from 'react-time-picker';

// npm i react-time-picker
class Time extends Component {
  constructor(props){
    super(props)
      this.state = {
        time :'10:00',
      }
    
  }
  
 
  onChange = time => {
      this.setState({ 
        time
       })
      this.props.onChange(time);
    } ;

handleClick = () =>{
    console.log(this.state.time);
    
};

    



  render() {
    return (
      <div>
              
        <TimePicker
          onChange={this.onChange}
          value={this.state.time}
         
        />
     
  
      </div>
      
    );
  }
}
export default Time;