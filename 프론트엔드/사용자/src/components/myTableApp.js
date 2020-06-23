
import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerBook from './myTableCustomer';

function TabJob({id, storeName, bookDate, book_time, book_num_of_people, user_name, booker_phone }) {
  if (id>0){
  return      <CustomerBook id={id} storeName={storeName}    bookDate={bookDate}   book_time={book_time}   book_num_of_people={book_num_of_people}   user_name={user_name}   booker_phone={booker_phone}          />
  }
  else{
    return null
  }
}





class MyTableApp extends Component{
  state = {

        // image:'',
       MyPageBook:[{
         "id":'',
       " bookDate": '',
        "book_time": '',
        "book_num_of_people": '',
        "user_name": '',
        "booker_phone": '',
        "storeNumber": '',
        "store_address":'',
        "storeName":'',
 
 
      }]
    }


  componentDidMount() {
    // this.callApiAddress();
    this.callApi();
    
}

callApi = () => {
    fetch('http://52.79.100.159:8080/api/book_table')
    .then(response => response.json())
    .then(body => {
        this.setState({ 
          MyPageBook: body.map(num => {return num}),
         });
    })
    .catch(error => console.log(error));
    console.log(this.state.bookDate)
    console.log(this.state.book_time)
    console.log(this.state)
}


// callApiAddress = () => {
//   fetch('http://59.29.224.191:8080/api/store_list')
//   .then(response => response.json())
//   .then(body => {
//       this.setState({ 
//         MyPageBook: body[0].store_address
//        });
//   })
//   .catch(error => console.log(error));
//   console.log(this.state.store_address)

// }




  render() {
    return (
      <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize:25  }}>번호</TableCell>
            
            <TableCell style={{ fontSize:25  }}>업체명</TableCell>
            <TableCell style={{ fontSize:25  }}>예약 날짜</TableCell>
            <TableCell style={{ fontSize:25  }}>예약시간</TableCell>
            <TableCell style={{ fontSize:25  }}>예약 인원</TableCell>
            <TableCell style={{ fontSize:25  }}>예약자 이름</TableCell>
            <TableCell style={{ fontSize:25  }}>예약자 번호</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.MyPageBook.map(c=> {return  ( <TabJob id={c.id} bookDate={c.bookDate} book_time={c.book_time}   book_num_of_people={c.book_num_of_people}   user_name={c.user_name}   booker_phone={c.booker_phone}     storeName={c.storeName}          />   )    }      )}

        </TableBody>
      </Table>
      </Paper>
    );//redner.return
  }//render
}//App

export default MyTableApp;