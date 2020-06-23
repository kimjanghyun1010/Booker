
import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Customer from './tableCustomer';


// {this.state.Storelist.map(c => { return ( 
//   <Customer  id={c.busnumber}  name={c.busname} 


// if(this.state.Storelist.map(c=> {return( c.category)})=="헬스장"){
function TabJob({ boardIdx,category, store_name, storeImage1, store_address }) {
  if (category==="수영장"){
  return      <Customer id={boardIdx} image={storeImage1} name={store_name} store_address={store_address} />
  }
  else{
    return null
  }
}





class TableAppFood extends Component{
state = {

        Storelist:[
          {"boardIdx": '',
         "store_number":'',
           "store_name":'',
           "category":'',
           "storeImage1":'',
           "store_address":''
          }

        ],
    
    }

componentDidMount() {
  this.callApi();
}

callApi = () => {
  fetch('http://52.79.100.159:8081/api/store_list')
  .then(response => response.json())
  .then(body => {
      this.setState({ 
        Storelist: body.map(num => {return num}),
       });
  })


}


// {this.state.Storelist.map(c => { return ( 
//   <Customer  id={c.busnumber}  name={c.busname} 
//   />);//map.return
// })}


render() {
  // this.state.Storelist.map(c=> {return(   c.category)})=="헬스장"){
    //  console.log(this.state.Storelist.map(c=> {return( console.log(c.category))}))




         return (
           <Paper>
           <Table>
             <TableHead>
               <TableRow>
                 <TableCell style={{ fontSize:20  }}>번호</TableCell>
                 <TableCell style={{ fontSize:20  }}>사진</TableCell>
                 <TableCell style={{ fontSize:20  }}>업체이름</TableCell>
                 <TableCell style={{ fontSize:20  }}>업체 주소</TableCell>
               </TableRow>
             </TableHead>
             <TableBody>


         {this.state.Storelist.map(c=> {return  (<TabJob boardIdx={c.boardIdx}  store_name={c.store_name} storeImage1={c.storeImage1} store_address={c.store_address}  category={c.category}/>   )    }      )}

               
 
             </TableBody>
           </Table>
           </Paper>
         );//if.return
   }//if
   


 //render
}//TableAppHair

     export default TableAppFood;