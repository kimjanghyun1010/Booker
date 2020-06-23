import React from 'react';
import './Form.css';

/*
<Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          onAdd={handleAdd}
        />

props = {value, onChange, onCreate, onKeyPress};
*/
const Form = (props) => {
  
  const {value, onChange, onCreate, onKeyPress,onAdd} = props;

  return (
    <div className="form">

  
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
      <div className="reserve-button" onClick={onAdd}>
        예약
      </div>
    </div>
  );
};

export default Form;