import React from 'react';
import Sildeimage from './Sildeimage';
import './Center.css';
import call_image from '../images/전화기.JPG';
import choose_image from '../images/유형선택.JPG';
import qanda_image from '../images/q&a.JPG';

const Notice = () => {
    return (
        <div className='center_box'>
            <div className='center_text_title1'>
                고객센터 이용안내
            </div>
            <div className='center_text_title2'>
                무엇을 도와드릴까요?
            </div>

            <div className='center_text_text'>

                <div className='center_text_inner_text'>
                <div className='inner_box_title'>
                        <img src={choose_image}></img>
                        <h5>STEP 01.</h5>
                        <h6>Q & A 에서 질문찾기</h6>
                    </div>

                    <div className='inner_box_content'>
                        전화상담전 Q & A<br></br>
                        확인을 통해 문제를<br></br>
                        빠르게 해결해 보세요.
                    </div>
                </div>


                <div className='center_text_inner_text'>
                    <div className='inner_box_title'>
                        <img src={call_image}></img>
                        <h5>STEP 02.</h5>
                        <h6>고객센터 전화상담</h6>
                    </div>

                    <div className='inner_box_content'>
                        Booker 고객센터<br></br>
                            1544-1004<br></br><br></br>
                            점심시간: 12:00 ~ 13:00
                    </div>
                </div>

                <div className='center_text_inner_text'>
                    <div className='inner_box_title'>
                        <img src={qanda_image}></img>
                        <h5>STEP 03.</h5>
                        <h6>문의할 상품유형 선택</h6>
                    </div>

                    <div className='inner_box_content'>
                        <ui>
                            <li>업체등록방법</li>
                            <li>업종추가</li>
                            <li>템플릿문의</li>
                            <li>상담사연결</li>
                        </ui>
                    </div>
                </div>

            </div>

            <div className='center_logo'>
                - Booker -
            </div>
        </div>
    );
};

export default Notice;