import React, {Component} from 'react';
import './main.css';

import UserReg from './userReg';
import { Route, Switch,BrowserRouter } from 'react-router-dom';




import Footer from './footer/footer';

import StoreMain from './storeMain';
import StoreMain2 from './storeMain2';
import Search from './search';
import Olayout from './olayout';
import Login from './login';
import MyPage from './myPage';
import UserSignUp from './userSignUp';
import FakeLayout from './Fakelayout';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {     
                    
        }
    }
    render(){
      
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Olayout}/>
                        <Switch>
                            <Route path="/nouser" component={FakeLayout}/>
                       
                            <Route path="/search" component={Search}/>
                            <Route path="/login" component={Login}   />
                            <Route path="/mypage" component={MyPage} />
                            <Route path="/signup" component={UserSignUp}/>


                            <Route path="/store/:storeName/:boardIdx" component={StoreMain}/>
                          
                            <Route path="/store2" component={StoreMain2}/>
                            <Route path="/userreg/:storeName/:boardIdx" component={UserReg}/>
                          
                        
                        </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>


     
        );
    }
}

export default Main;

