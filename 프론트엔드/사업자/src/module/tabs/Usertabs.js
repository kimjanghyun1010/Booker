import React from 'react';

import './Usertabs.css';

import Hide_toggle from '../hide/hide-toggle.js'


class UserTabs extends React.Component {
  render(){
    return(
      <div className="tabs">
        
       <Tabs>
         <Tab label="음식점">
           <div className='tab-container'>
              <div className='inner-container'>
                  <div className='inner-title'><li>일일 예약자 수 </li></div>
                  <div className='inner-boax'>하이요</div>
              </div>

              <div className='inner-container'>
                  <div className='inner-title'><li>일일 예약자 수 </li></div>
                  <div className='inner-boax'>하이요</div>
              </div>

              <div className='inner-container'>
                  <div className='inner-title'><li>일일 예약자 수 </li></div>
                  <div className='inner-boax'>하이요</div>
              </div>

              <div className='inner-container'>
                  <div className='inner-title'><li>일일 예약자 수 </li></div>
                  <div className='inner-boax'>하이요</div>
              </div>
           
          </div>     
         </Tab>

         <Tab label="미용실">
         <div className='tab-container'>
              <div className='inner-container'>
                  <div className='inner-title'><li>일일 예약자 수 </li></div>
                  <div className='inner-boax'>123123</div>
              </div>

              <div className='inner-container'>
                  <div className='inner-title'><li>일일 예약자 수 </li></div>
                  <div className='inner-boax'>하이요</div>
              </div>

              <div className='inner-container'>
                  <div className='inner-title'><li>일일 예약자 수 </li></div>
                  <div className='inner-boax'>하이요</div>
              </div>

              <div className='inner-container'>
                  <div className='inner-title'><li>일일 예약자 수 </li></div>
                  <div className='inner-boax'>하이요</div>
              </div>
           
          </div>
              
         </Tab>

         <Tab label="ㅁㄴㅇㅁㄴㅇ">
            <div className='tab-container'>
            <div className='inner-container'>
        
            <Hide_toggle/>
              </div>
            </div>
              
         </Tab>
         
         
       </Tabs>
      </div>
      
    )
  }
}

class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };
  render(){
    
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{
   
  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
       return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
 
export default UserTabs;