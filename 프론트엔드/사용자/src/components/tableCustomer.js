import React, { Component } from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import {Link} from 'react-router-dom'

// style={{ backgroundImage: `url(http://59.29.224.191:8080/${this.state.image})` 





  class Customer extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <TableRow>
                

                <TableCell style={{ fontSize:25   }}><Link exact to ={`/store/${this.props.name}/${this.props.id}`}>{this.props.id}</Link></TableCell>

                
                 <TableCell> <Link exact to ={`/store/${this.props.name}/${this.props.id}`}> <img src={this.props.image}  /> </Link></TableCell> 
                <TableCell style={{ fontSize:25  }}>{this.props.name}</TableCell>
                <TableCell style={{ fontSize:25  }}>{this.props.store_address}</TableCell>
                
        
             



            </TableRow>
        )// return
    }//render
}//Componet


class CustomerProfile extends Component{
    render(){
        return (
            <div>
                <img src={this.props.image} />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )// return
    }//render
}//Componet


class CustomerInfo extends Component{
    render(){
        return (
            <div>
                <p>{this.props.birth}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )// return
    }//render
}//Componet


export default Customer;