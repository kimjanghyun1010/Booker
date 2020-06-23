import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Head.css';
import Noregist from '../pages/Noregist';



class Head extends React.Component {

constructor(props){
  super(props);
}


  render() {
    return (
      <div className="header">
        <div className="logo"><Link exact to={`/${this.props.uid}/${this.props.uname}/${this.props.unumber}`}>Booker-Ceo</Link></div>

        <div className="menu">
          <Link exact to={`/${this.props.uid}/${this.props.uname}/${this.props.unumber}`} >홈</Link>
          <Link exact to={`/${this.props.uid}/${this.props.uname}/${this.props.unumber}/env/service`} >설정</Link>
        </div>
        
        <div className='empty2'>
            {this.props.uname}
        </div>

        <Link exact to={`/${this.props.uid}`} ><button>돌아가기</button></Link>
      </div>
    );
  }

}




export default Head;