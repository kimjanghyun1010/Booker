import React, { Component } from 'react';
import './storeMain.css';
import StoreHeader from './header/storeHeader';

import { Link } from 'react-router-dom'
import KaKaoMapPin from '../components/kakaoMapPin';







/*console.log(this.state.Storelist.map(c=> {return( console.log(c.category))}))*/

class StoreMain extends Component {

    constructor(props) {
        super(props)
        this.state = {

         
            storeMain:[
                {"boardIdx": '',
               "store_number":'',
                 "store_name":'',
                 "category":'',
                 "image2":'',
                 "image3":'',
                 "image4":'',
                 "store_address":''
                }
      
              ],



            
        }
    }
    scrollUp = () => {
        window.scrollBy({
            top: -10000,
            behavior: 'smooth'
        });
    }
    componentDidMount() {
        this.callApi();
    }

    callApi = () => {
        fetch('http://52.79.100.159:8081/api/store_list')
        .then(response => response.json())
        .then(body => {
            this.setState({ 
                 store_address: body[0].store_address,
               //   image:   body[0].fileInfoList[0].storedFilePath,
                 store_explanation : body[0].store_explanation,
                 store_name : body[0].store_name,
                 boardIdx: body[0].boardIdx,
                 image2: body[0].storeImage2,
                 image3: body[0].storeImage3,
                 image4: body[0].storeImage4
          

              //  storeMain: body.map(num => {return num}),
              // StoreName: body.map(num => {return num}),
                
             });
        })
    }
    render() {
        
      

        const {params} = this.props.match;
        console.log(params)
        console.log(params.boardIdx)
        console.log(params.storeName)

       
       console.log(   this.state.storeMain)

        return (
            <div id="contents">
                <div id="cont_cont">
                    <div className="store_header">
                        <StoreHeader />
                    </div>
                    <div className="store_main_container">
                        <div id="parallax-world-of-ugg">

                            <section>
                                <div class="title">
                                    <h3>Let's do some</h3>
                                     <h1>{params.storeName}</h1>
                                    
                                </div>
                            </section>
       
                            <section> 
                                {/* <div class="parallax-one-store" style={{ backgroundImage: `url(http://59.29.224.191:8080/${this.state.image})` }}> */}
                                <div class="parallax-one-store" style={{ backgroundImage: `url(${this.state.image2})` }}>
                                    <h2>The</h2>
                                    <h2>{this.state.store_name}</h2>
                                    <Link to={`/userreg/${params.storeName}/${params.boardIdx}`}> <button className=" store_reg_btn">예약하기</button></Link>

                                    {/* <Link exact to ={`/store/${this.state.store_name}/${this.state.boardIdx}/userreg`}> <button className=" store_reg_btn">예약하기</button></Link> */}
                                </div>
                                <div>
                                </div>
                            </section>

                            <section>
                                <h4 className="store_intro">업체 소개</h4>
                                <button onClick={this.scrollUp} className="top_btn">TOP</button>
                                <div class="block">
                                    <p><span class="first-character sc">I</span>
                                        <div className="first_story_font">{params.storeName}을 방문해주셔서 감사합니다</div>
                                    </p>
                                    <p class="line-break margin-top-10"></p>
                                    <p class="margin-top-10"><div className="second_story_font">{params.storeName}은 고객님을 속여 이득을 취하지 않습니다 </div> </p>
                                </div>
                            </section>

                            <section>
                                <div class="parallax-two" style={{ backgroundImage: `url(${this.state.image3})`}} >
                                    <h2>INFO</h2>
                                </div>
                            </section>

                            <section>
                                <h4 className="store_intro">대표서비스</h4>
                                <button onClick={this.scrollUp} className="top_btn">TOP</button>
                                <div class="block">
                                    <p><span class="first-character sc">I</span>
                                        <div className="first_story_font">요일별 할인목록</div>
                                    </p>
                                    <p class="line-break margin-top-10"></p>
                                    {/* <p class="margin-top-10"><div className="second_story_font">{this.state.store_explanation}</div> </p> */}

                                    <p class="margin-top-10"><div className="second_story_font">월 : 떡볶이 1인분 2천원<br></br>
                                                                                                화 : 튀김 1인분 2천원<br></br>
                                                                                                수 : 오뎅 1인분 2천원<br></br>
                                                                                                목 : 라면 1인분 2천원</div> </p>
                                </div>
                            </section>

                            <section>
                                <div class="parallax-three" style={{ backgroundImage: `url(${this.state.image4})`}}  >
                                    <h2>SERVICE</h2>
                                </div>
                            </section>

                            <section>
                                <h4 className="store_intro">업체 위치</h4>
                                <button onClick={this.scrollUp} className="top_btn">TOP</button>
                                <div class="block">
                                    <p class="line-break margin-top-10"></p>
                                </div>
                            </section>
                            <section>
                                <KaKaoMapPin store_address={this.state.store_address} />
                            </section>
                            <section>
                                <div class="block">
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StoreMain;