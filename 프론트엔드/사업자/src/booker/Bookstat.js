import React from 'react';


const Bookstat2 = (props) => {
    console.log('zzzzz',props);
    return (
      <div className="todo-list-template">
        <div className="title">
          접수 현황
        </div>
        <div className="form-wrapper">
            {props.id}
        </div>

       
      </div>    
    );
  };
  

export default Bookstat2;