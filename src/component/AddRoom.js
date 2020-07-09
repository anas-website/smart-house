import React, {useState} from 'react'
import {Consumer} from './ContextAPI'
import {Link} from 'react-router-dom';
// import './App.css';
export default function AddRoom(props) {
    const [roomName,setRoomName]=useState('select')
 const [RoomIdName,setRoomIdName]=useState('')
       const [roomColor,setRoomColor]=useState('#f9f0f0')
 
    return (
    <div> 
           
 <div className='container'>
  <select  className='form-control ' onChange={ (e)=>{
    
        setRoomName( e.target.value)
      }} name="cars" id="cars">
    <option  value="select">Select room </option>
     <option value="Bedroom">Bedroom</option>
     <option value="Bathroom">Bathroom</option>
     <option value="Kitchen">Kitchen</option>
  </select>
    <br/>
 
    <input  className='form-control' placeholder='ID room' maxLength='5' onChange={(e)=>{ setRoomIdName(e.target.value)}} ></input>
     <br/>
 <div style={{ backgroundColor:'gray',  minWidth:'300px',margin:'auto', display:'flex' ,borderRadius:'5px'}} >

     <h4 style={{paddingRight :'10px',paddingLeft :'10px'}} >Choose Color</h4>

     <input style={{height:'40px'}}   onChange={(e)=>{setRoomColor(e.target.value);
      }} type='color'   value={roomColor} ></input>
 </div>
 <br/> 

 <Consumer>
   {(val)=>{

     return<Link to='/'> <button className='btn btn-dark' onClick={() => {
       if(roomName=='select'||RoomIdName.length<1){ 
       
         alert('you did not choose a room or id room! ')}
         else{val.setRooms([...val.rooms,{ roomName,RoomIdName,roomColor,roomDevices:[]}])}
        
       } }>Add Room</button></Link>
    }
   }
</Consumer>
    <br/>
 

          </div>
          <br />
        </div>
    )
}
