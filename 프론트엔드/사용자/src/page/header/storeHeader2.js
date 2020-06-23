import React, {Component} from 'react';
import './storeHeader2.css';

import {Link} from 'react-router-dom'

let a =1;
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
            top: 4000,         
            behavior: 'smooth'
          });
      }
    render(){

        if(a===1){
        return (
            <div className="store2_header">
               

                <div className="store2log">
                    <div className="store2log1">
                    <button onClick={this.scrollStoreInfo} className="store2btn">INFO</button>
                    </div>
    
                    <div className="store2log2">
                    <button  onClick={this.scrollMenu} className="store2btn">SERVICE</button>
                    
                    </div>

                    <div className="store2log3">
                    <button onClick={this.scrollLocation} className="store2btn">LOCATION</button>
                    </div>

                    <div className="store2log4">
                  <button className="store2btn">LOGIN</button>
                    </div>
                    
                </div>

            </div>
        );
            }

            else{
                return(
                    <div className="store2_header">
               

                    <div className="store2log">
                        <div className="store2log1">
                        <button onClick={this.scrollStoreInfo} className="store2btn">INFO</button>
                        </div>
        
                        <div className="store2log2">
                        <button  onClick={this.scrollMenu} className="store2btn">SERVICE</button>
                        
                        </div>
    
                        <div className="store2log3">
                        <button onClick={this.scrollLocation} className="store2btn">LOCATION</button>
                        </div>

                        <div className="store2log4">
                      <button className="store2btn">LOGOUT</button> 
                        </div>


                       
                       
                        
                    </div>

                </div>
                );
            }
    }
}

export default StoreHeader;