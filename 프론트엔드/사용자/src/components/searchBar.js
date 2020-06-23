import React, { Component } from 'react';
import MapContent from './kakaoMapSearch';
import { Link } from 'react-router-dom';
import './searchBar.css';
class SearchBar extends Component {
  state = {
    search: ''
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    });
  }

  handleClick = () => {
    this.refs.MapContent.setSearchKeyword(this.state.search);
  }

  render() {
    return (
      <div>
        
        <input className="input_box" placeholder="검색" value={this.state.search} onChange={this.handleChange} />
        <Link to="/search" ><button className="button_box" onClick={this.handleClick} >search</button> </Link>

        <div hidden>
         
          <MapContent ref="MapContent" search={this.state.search} />
        </div>

      </div>
    );
  }
}

export default SearchBar;