import React, { Component } from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';



  class CustomerBook extends Component{
    render(){
        return(
            <TableRow>
         

                <TableCell style={{ fontSize:20  }}>{this.props.id}</TableCell>
              
    
                <TableCell  style={{ fontSize:20  }}>{this.props.storeName}</TableCell>
                <TableCell style={{ fontSize:20  }}>{this.props.bookDate}</TableCell>
                <TableCell style={{ fontSize:20  }}>{this.props.book_time}</TableCell>
                <TableCell style={{ fontSize:20  }}>{this.props.book_num_of_people}</TableCell>
                <TableCell style={{ fontSize:20  }}>{this.props.user_name}</TableCell>
                <TableCell style={{ fontSize:20  }}>{this.props.booker_phone}</TableCell>

            </TableRow>
        )// return
    }//render
}//Componet


//class CustomerProfile extends Component{
  //  render(){
   //     return (
      //      <div>
      //          <img src={this.props.image} />
   //             <h2>{this.props.name}({this.props.id})</h2>
  //          </div>
     //   )// return
 //   }//render
//}//Componet


//class CustomerInfo extends Component{
   // render(){
     //   return (
       //     <div>
        //        <p>{this.props.birth}</p>
         //       <p>{this.props.gender}</p>
         //       <p>{this.props.job}</p>
         //   </div>
        //)// return
  //  }//render
//}//Componet


export default CustomerBook;