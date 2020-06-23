import momentJalaali from 'moment-jalaali';
import { Calendar } from 'react-datepicker2';
import React from 'react'
import 'react-datepicker2/src/styles/style.css';
//npm i moment-jalaali
// npm i react-datepicker2
 
class NewCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: momentJalaali(),
   
      valueMonth: '',
    };
    

    this.disabledRanges = [
      { 
        disabled: true, 
        start:momentJalaali().add(-200,'month'),
        end:momentJalaali().add(-1,'days') 
      },
      { 
        disabled: true, 
        start:momentJalaali().add(1,'days'), 
        end:momentJalaali().add(-1,'days') 
      }
    ]
  }



  

onChange =(value) =>{
  this.setState({
    value
  })  
 const calendar=this.getCustomFormat(this.state.value)
 this.props.onChange(calendar);



}

onChangeMonth =(valueMonth) => {
  this.setState({
    valueMonth
  })

  const calendarMonth=this.getCustomFormatMonth(this.state.valueMonth)

  this.props.onChange(calendarMonth);
 
}





  getCustomFormat(inputValue) {
    if (!inputValue)
      return '';
    const inputFormat =  'YYYYMMDD';
    return  inputValue.locale('es').format(inputFormat) 
  }
  
  



  render() {

   
    return <div>
      <Calendar
         ranges={this.disabledRanges}
      className="calendar"
        value={this.state.value}
        valueMonth={this.state.valueMonth}
        
        onChange={this.onChange}
        
      
  
      />
     
     
      <div>
        <h3>날짜 </h3>
      <h5 className="reg_date"> &nbsp;&nbsp;&nbsp; {this.getCustomFormat(this.state.value)}</h5>
      </div>
    </div>
  }
}
export default NewCalendar;