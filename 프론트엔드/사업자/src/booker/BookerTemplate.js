import React from 'react';
import './BookerTemplate.css';


const BookerTemplate = ({form, children}) => {
  
  return (
    <div className="todo-list-template">
      <div className="title">
        예약 현황
      </div>

      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>

     
    </div>    
  );
};

export default BookerTemplate;