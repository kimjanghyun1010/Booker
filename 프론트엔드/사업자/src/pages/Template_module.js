import React, { Component } from 'react';
import Template_image from '../images/Template.png';


import Spring from '../template/Spring';
import Summer from '../template/Summer';
import Fall from '../template/Fall';
import Winter from '../template/Winter';


import './Template.css';

const Template_module = ({ match }) => {
    
        const category = match.params.title
        console.log(match.params.title);

        if (category == '봄') {
            return (
                <Spring/>
            );
        }

        else if ( category == '여름'){
            return (
                <Summer/>
            );
        }

        else if ( category == '가을'){
            return (
                <Fall/>
            );
        }

        else if( category == '겨울'){
            return (
                <Winter/>
            );
        }
        
};


export default Template_module;