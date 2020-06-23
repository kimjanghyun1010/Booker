import React,{Component} from 'react';

import './search.css';
import MapContent from '../components/kakaoMapSearch';

import Header from './header/mainHeader';


class Search extends Component {
    render(){
        return (
            <div id="contents">
                <div id="cont_cont">
               
                    <div className="main_container">
                        <div className="cont_search">
                            <Header/>
                            <div className="cont_searchlist" >
                                <MapContent/>                               
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;