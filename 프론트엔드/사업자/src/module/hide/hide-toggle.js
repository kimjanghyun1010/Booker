import React from 'react';
import './hide-toggle.css';
import ImageUpload from './upload.js';


class Hide_toggle extends React.Component {

    constructor ( props ) {
        super( props );
		
		this.state = {
            isChecked: null
            
        }
        this.state = { isShown: false };
    }
	
	componentWillMount () {
        this.setState( { isChecked: this.props.isChecked } );
       
	}
      

    toggleText = () => {
        const { isShown } = this.state;
        this.setState({ isShown: !isShown });
        console.log("toggle"+ isShown);
      };

    render () {

        const { isShown } = this.state;

        return(
            <div className="switch-container">
                
                <label>
                
                    <input ref="switch"  

                    checked={ this.state.isChecked }    
                    onChange={this.toggleText} className="switch" type="checkbox" 
                    />                 
                    <div>                 
                        <div></div>
                    </div>
                    
                
                   
                </label> 

                 <div >

                    {isShown && <ImageUpload/> }
                </div>
                    
            </div>
        );
    }


    
}


export default Hide_toggle;
