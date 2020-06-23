  
import React, { Component } from 'react';

import StoreMain from './storeMain';

const storeName = ({ match }) => {
    
        const storeName = match.params.storeName
        console.log(match.params.storeName);

        if (storeName != null) {
            return (
                <StoreMain/>
            );
        }
        
};


export default storeName;