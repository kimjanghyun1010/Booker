import React from 'react';
import { Link, Route } from 'react-router-dom';
import { StorePost } from 'pages'; 

const StorePosts = ({match}) => {
    return (
        <div>
           <h2>StorePost List</h2> 
           <ul>
                <li><Link to={`${match.url}/1`}>StorePost #1</Link></li>
                <li><Link to={`${match.url}/2`}>StorePost #2</Link></li>
                <li><Link to={`${match.url}/3`}>StorePost #3</Link></li>
                <li><Link to={`${match.url}/4`}>StorePost` #4</Link></li>
           </ul>
           <Route exact path={match.url} render={()=>(<h3>Please select any StorePost</h3>)}/>
           <Route path={`${match.url}/:id`} component={StorePost}/>
        </div>
    );
};

export default StorePosts;