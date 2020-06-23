import React from 'react';
import Sildeimage from './Sildeimage';
import './Guide.css';

const Guide = () => {
    return (
        <div className='guide_box'>
            <div className='guide_text_title1'>
                등록가이드 이용안내
            </div>

            <div className='guide_text_title2'>
                <li>템플릿 사용</li>
            </div>

            <div className='guide_text_text'>
                <div className='guide_text_inner_text'>
                    <div className='guide_inner_box_title'>
                        STEP 01.
                    </div>
                    <div className='guide_inner_box_content'>
                        설정 -> 템플릿 보기
                    </div>
                </div>
                <div className='guide_text_inner_text'>
                    <div className='guide_inner_box_title'>
                        STEP 02.
                    </div>
                    <div className='guide_inner_box_content'>
                        설정 -> 홈페이지 -> <br></br>사진 업로드

                    </div>
                </div>
                <div className='guide_text_inner_text'>
                    <div className='guide_inner_box_title'>
                        STEP 03.
                    </div>
                    <div className='guide_inner_box_content'>
                        옵션 값 작성
                    </div>
                </div>
                <div className='guide_text_inner_text'>
                    <div className='guide_inner_box_title'>
                        STEP 04.
                    </div>
                    <div className='guide_inner_box_content'>
                        완료(홈페이지 생성)
                    </div>
                </div>
            </div>
            <div className='guide_text_title2'>
                <li>템플릿 미사용</li>
            </div>
            <div className='guide_text_text'>
                <div className='guide_text_inner_text'>
                    <div className='guide_inner_box_title'>
                        STEP 01.
                    </div>
                    <div className='guide_inner_box_content'>
                        사진 4개 준비
                    </div>
                </div>
                <div className='guide_text_inner_text'>
                    <div className='guide_inner_box_title'>
                        STEP 02.
                    </div>
                    <div className='guide_inner_box_content'>
                        설정-> 홈페이지 -><br></br>
                        선택된 템플릿 확인
                    </div>
                </div>
                <div className='guide_text_inner_text'>
                    <div className='guide_inner_box_title'>
                        STEP 03.
                    </div>
                    <div className='guide_inner_box_content'>
                        옵션 값 작성
                    </div>
                </div>
                <div className='guide_text_inner_text'>
                    <div className='guide_inner_box_title'>
                        STEP 04.
                    </div>
                    <div className='guide_inner_box_content'>
                        완료(홈페이지 생성)
                    </div>
                </div>
            </div>

            <div className='guide_logo'>
                - Booker -
            </div>
        </div>
    );
};

export default Guide;