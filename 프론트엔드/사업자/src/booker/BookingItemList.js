import React, { Component } from 'react';
import BookingItem from './BookingItem';

class BookingItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
  render() {
    console.log(this.props);
    const { todos:a, onToggle, onRemove } = this.props;
    console.log('totds입니다',a);

    const todoList = a.map(
        ({id, text, checked}) => (
          <BookingItem
            id={id}
            text={text}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            key={id}
          />
        )
      );
  
      return (
        <div>
          {todoList}    
        </div>
      );
    }
  }
  
  export default BookingItemList;