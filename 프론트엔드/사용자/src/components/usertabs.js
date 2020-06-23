import React from 'react';

import './usertabs.css';
import TableAppFood from './tableAppFood';

import TableAppHair from './tableAppHair';
import TableAppGym from './tableAppGym';
import TableAppPc from './tableAppPc';

import TableAppPilates from './tableAppPilates';

import TableAppBall from './tableAppBall';
import TableAppSwim from './tableAppSwim';
import TableAppRent from './tableAppRent';


class UserTabs extends React.Component {
  render(){
    return(
      <div className="tabs">
       <Tabs>
          <Tab label="음식점">
            <div className="food_tab">
            <TableAppFood/>
            
            </div>
          </Tab>
          <Tab label="미용실">
            <div className="hair_tab">
            <TableAppHair/>

            </div>
          </Tab>

          <Tab label="헬스장">
          <div className="gym_tab">
          <TableAppGym/>

            </div>
          </Tab>

          <Tab label="PC방">
          <div className="pc_tab">
          <TableAppPc/>

            </div>
          </Tab>

          <Tab label="볼링">
          <div className="balling_tab">
          <TableAppBall/>

            </div>
          </Tab>


          <Tab label="렌트카">
          <div className="balling_tab">
          <TableAppRent/>

            </div>
          </Tab>



          <Tab label="수영장">
          <div className="balling_tab">
          <TableAppSwim/>

            </div>
          </Tab>



          <Tab label="필라테스">
          <div className="balling_tab">
          <TableAppPilates/>

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
       return <button  className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
       
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