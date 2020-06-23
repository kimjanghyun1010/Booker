import React,{Component} from 'react';

import 'react-calendar/dist/Calendar.css';
import moment from 'react-moment';
import Calendar from 'react-calendar';

import classes from 'react-classes';

// npm i react-calendar
// npm i react-moment
// npm i react-classes

class CalendarPick extends Component {
  state = {
    date: new Date(),
  }
  onChange = date => {this.setState({ date })
  console.log(this.state.date);
}

  onDateChange = date => { this.setState({date: moment(date).format("YYYY-MM-DD")})
  
  };
 
  render() {
    return (
      <div>
        <Calendar
        className={classes.calendar}
          onChange={this.onChange}
          
          value={this.state.date}
          onDateChange={this.onDateChange}
        />
      </div>
    );
  }
}
export default CalendarPick;