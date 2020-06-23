import React, { Component } from 'react';
import './Check.css';
import '../booker/BookerTemplate.css';
import Form from '../booker/Form';
import BookingItemList from '../booker/BookingItemList';
import Bookstat from '../booker/Bookstat';





function Printbook({ data }) {
  console.log(data);
  return <div className='form-wrapper'>

    <div className='divide_1'>{data[0]}</div>
    <div className='divide_2'>{data[1]}</div>
    <div className='divide_5'>{data[4]}</div>
    <div className='divide_3'>{data[2]}</div>
    <div className='divide_4'>{data[3]}</div>
  </div>
}

class Check2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Booklist: [],
    }

  }



  componentWillMount() {
    this.callApi();

  }
  //${this.props.businessnumber}
  callApi = () => {
    fetch(`http://52.79.100.159:8080/api/book_table/${this.props.businessnumber}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          Booklist: data.map(num => { return [num.bookDate, num.book_time, num.book_num_of_people, num.user_name, num.booker_phone] }),
        })

      )
      .catch(error => console.log(error))


  }




  //{this.state.Servicelist.map(element => <Fruit2 name={element} />)}


  render() {
    console.log(this.state.Booklist);
    return (
      <div className='check-box'>
        <div className='check-title'>예약자 확인</div>



        <div className="todo-list-template">
          <div className="title">
            예약자 현황
            <div className='divide_box'>
              <div className='divide_1'>날짜</div>
              <div className='divide_2'>시간</div>
              <div className='divide_5'>전화번호</div>
              <div className='divide_3'>인원</div>
              <div className='divide_4'>예약자명</div>
            </div>
          </div>

          <section className="todos-wrapper">
            {this.state.Booklist.map(element => <Printbook data={element} />)}
          </section>


        </div>
      </div>
    );
  }
}

export default Check2;