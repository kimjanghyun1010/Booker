import React from 'react';




class Hide extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isShown: false };
    }
  
    toggleText = () => {
      const { isShown } = this.state;
      this.setState({ isShown: !isShown });
    };
  
    render() {
      const { isShown } = this.state;
      
      return (
        <div>
          <button onClick={this.toggleText}>{isShown ? 'hide' : 'show'}</button>
          {isShown && <p>help me!</p>}
        </div>
      );
    }
  }
  
export default Hide;