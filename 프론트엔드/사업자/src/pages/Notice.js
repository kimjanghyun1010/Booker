import React from 'react';
import Sildeimage from './Sildeimage';
import './Notice.css';

const Notice = () => {
    return (
        <div className='notice_box'>
            <div className='notice_text_title'>
                - 공지 사항 -
            </div>

            <div className='notice_text_text'>
                <li>Booker 정식 서비스 출시.    - 2020. 06. 20</li><br></br>
                <li>모든 업체를 등록해주세요.</li><br></br>
                <li>등록가이드를 이용해주세요.</li><br></br>
                <li>추가 업종 문의바랍니다.</li><br></br>
            </div>

            <div className='notic_logo'>
                - Booker -
            </div>
        </div>
    );
};

export default Notice;