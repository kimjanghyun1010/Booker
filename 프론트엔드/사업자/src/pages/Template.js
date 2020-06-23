import React, { Component } from 'react';
import Template_image from '../images/Template.png';

import spirng_img1 from '../images/봄1.jpg';
import spirng_img2 from '../images/봄2.png';
import spirng_img4 from '../images/봄4.jpg';
import summger_img2 from '../images/여름2.jpg';
import winter_img1 from '../images/겨울1.jpg';


import './Template.css';


function Tempate_function({ name }) {

    function viewtem2() {
        window.open(`http://localhost:3001/Template_module/${name.name}`, 'template', 'width=1400, height=700, status=no,resizable=no');
    }
    
    return  <button className='template_box_menu' onClick={viewtem2} >
                <div className='template_img'>
                    <img src={name.image} width="100%" height="100%"></img>
                </div>
                <div className='template_name'>{name.name}</div>
                <div className='template_explain'>{name.explain}</div>
            
            </button>
}



const temp = [
    {
        image: spirng_img1,
        name: '봄',
        explain: '산뜻한 봄날'
    },
    {
        image: summger_img2,
        name: '여름',
        explain: '시원한 여름날',
    },
    {
        image: spirng_img2,
        name: '가을',
        explain: '따뜻한 가을',
    },

    {
        image: winter_img1,
        name: '겨울',
        explain: '차가운 겨울날',
    },
]


class Template extends Component {

    constructor() {
        super();
    }

    state = {
        name: ''
    }


    

    render() {
        return (
            <div className="tem_box">

                <div className="tem_title">
                    템플릿 (테마설정)
                </div>

                <div className='template_box'>
                    {temp.map(element => <Tempate_function name={element} />)}
                </div>

            </div>

        )
    }
};

export default Template;