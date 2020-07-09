import React, { useState } from 'react';
import Room from './Room';
import {Consumer} from './ContextAPI'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

//  key={Date.now().toString(36) + Math.random().toString(36).substr(2)}
  return (
    <div className ='container col-12'style={{width:'400px'}} >
     <div className='row'>
      
     <Consumer>

 {/* Display "Room" component and pass with it props from the Consumer */}

      { (val)=>{ 
        return (val.rooms.map((element, i) => {
          return(<div key={i} className= 'col-6' style={{minWidth:'150px'  }}>
        <Room 
            roomName={element.roomName}
            roomIdName={element.RoomIdName}
            roomColor={element.roomColor}
            //Pass a function that delete a room from the contextAPI
            del={(i) => {
               const tempo =val.rooms.filter((element, index) => index != i)
                val.setRooms(tempo)
            }} index={i} />  

            <br/>
        </div>
        )
      }))}}
  </Consumer> 
       </div>
        <Link to='/addroom' style={{ textDecoration:'none' }} > <div style={{ margin:'auto' ,  color:'white', backgroundColor:'gray',border:'solid 2px black',  width:'100px',height:'70px', borderRadius:'50px' }} ><h1 style={{ fontSize:'50px', color:'whit' ,height:'50px' , }} >+</h1> </div> </Link>
      <br/>
    </div>
  );
}
