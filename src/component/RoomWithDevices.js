import React,{useState} from 'react'
import {withRouter,Redirect,Link} from 'react-router-dom';
import {Consumer} from './ContextAPI'

import AddDevice from './AddDevice';
import Device from './Device'
 const   RoomWithDevices=function (props) {
     const id=  props.match.params.id
     console.log(+id )
    const [flag, setflag] = useState(false)
    const[btnName,setBtnName]= useState('Add Device')
   const[render,setrender]=useState(false)



//function change button name
 const changeFlag=()=>{
    setflag(!flag)
  if(btnName=='Add Device'){ setBtnName('Cancel')}
  else{setBtnName('Add Device')}
   }
//##############
  //Function display and hide   "AddDevice" component 
    const hideAndShowAddDevice=()=>{
      if(flag){ 
         return(<AddDevice changeFlag={changeFlag}/>)}  
    }
  
    return (
        <div>
   <Consumer>
  
   {(val)=>{
    

     // If the route is error, redirect to the home page "/"

    if(props.match.params.id<val.rooms.length)

     return ( <div  className='row' >
     
  <div  className='col-6' >
     <h5 > Room Name: {val.rooms[+props.match.params.id].roomName}</h5>
     <br/>
     <h5 > Room ID: {val.rooms[+props.match.params.id].RoomIdName}</h5>
  </div>

<div className='col-6' >

   {/* Display "Device" component */}

      { val.rooms[+props.match.params.id].roomDevices.map((element,i)=>{
      return <  Device key={i}
            delete={(index)=>{ 
         const tempo=val.rooms[+props.match.params.id].roomDevices.filter((element,n)=>index!=n)
        setrender(!render)
       val.rooms[+props.match.params.id].roomDevices=[...tempo]
     }}

   index={i} device={element.Device}/> })
 }

  </div>
  </div> )
           else return  <Redirect to='/'/>}}
    
   </Consumer>
   <br/>
  
    {/* When the button is clicked, the button name is changed to "Cancel/Add Device" and "AddDevice" component is Displayed  or hidden */}

<div className='container' style={{backgroundColor:'gray',padding:'20px'}} >  <button className='btn btn-dark mb-4 '  onClick={ ()=>{changeFlag()} } >{btnName}</button>
      {hideAndShowAddDevice()}
      </div>

        </div>
    )
}

  // withRouter enables to access the route di (/:id )
export default withRouter ( RoomWithDevices) 
