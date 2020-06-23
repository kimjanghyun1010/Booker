import React, { Component } from 'react';
import './Check.css';
import BookerTemplate from '../booker/BookerTemplate';
import Form from '../booker/Form';
import BookingItemList from '../booker/BookingItemList';
import Bookstat from '../booker/Bookstat';



class Check extends Component {

  id = 0 // 이미 0,1,2 가 존재하므로 3으로 설정
  id2 = 0
  state = {
    input: '',
    todos: [

    ],
    download:[]
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
          todos: data.map(num => { return [num.user_name] }),
        })
        
        /*
        console.log(data);
        var ceolist=[];
        ceolist = data.map(num =>{return num.busname})
        this.setState({
            Ceolist :data.map(num =>{return num.busname}),
        })
        */

      )
      .catch(error => console.log(error))

        console.log(this.state.todos);
  }


  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });

  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleAdd = (id) => {
    const { todos } = this.state;

    console.log('add안입니다', todos);
    this.setState({
      todos: []

    });
    this.countAdd(this.id);


  }
  countAdd = (id) => {
    this.id2 = this.id;
  }


  render() {
    console.log('1');
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleAdd
    } = this;
    

    return (
      <div className='check-box'>
        <div className='check-title'>예약자 확인</div>

        <>

          <BookerTemplate form={(
            <Form
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate}
              onAdd={handleAdd}
            />
          )}>
            <BookingItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
          </BookerTemplate>

          <Bookstat id={this.id2} /></>
      </div>
    );
  }
}

export default Check;