import React, {Component} from 'react';
import './storeHeader.css';

import {Link} from 'react-router-dom'

let a =0;
class StoreHeader extends Component {

    scrollStoreInfo=() =>{
        window.scrollBy({
            top: 1200,         
            behavior: 'smooth'
          });
      }

      scrollMenu=() =>{
        window.scrollBy({
            top: 2450,         
            behavior: 'smooth'
          });
      }

      scrollLocation=() =>{
        window.scrollBy({
            top: 3700,         
            behavior: 'smooth'
          });
      }
    render(){

        if(a===1){
        return (
            <div className="store_header">
               

                <div className="storelog">
                    <div className="storelog1">
                    <button onClick={this.scrollStoreInfo} className="storebtn">업체소개</button>
                    </div>
    
                    <div className="storelog2">
                    <button  onClick={this.scrollMenu} className="storebtn">서비스</button>
                    
                    </div>

                    <div className="storelog3">
                    <button onClick={this.scrollLocation} className="storebtn">위치</button>
                    </div>

                    <div className="storelog4">
                   <Link to='/login' ><button className="storebtn">로그인</button> </Link>
                    </div>
                    
                </div>

            </div>
        );
            }

            else{
                return(
                    <div className="store_header">
               

                    <div className="storelog">
                        <div className="storelog1">
                        <button onClick={this.scrollStoreInfo} className="storebtn">업체소개</button>
                        </div>
        
                        <div className="storelog2">
                        <button  onClick={this.scrollMenu} className="storebtn">서비스</button>
                        
                        </div>
    
                        <div className="storelog3">
                        <button onClick={this.scrollLocation} className="storebtn">위치</button>
                        </div>

                        <div className="storelog4">
                       <Link to='/login' ><button className="storebtn_logout">로그아웃</button> </Link>
                        </div>


                       
                       
                        
                    </div>

                </div>
                );
            }
    }
}

export default StoreHeader;