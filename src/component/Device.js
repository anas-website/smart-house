
import React, {useState} from 'react'
import { Consumer } from './ContextAPI'
import {withRouter }  from 'react-router-dom'

 function Device(props) {
    
    const [btnColor, setBtnColor] = useState('')
  
    return (
        <div>
             
 <Consumer>
  {(val)=>{
       //Change the button color:
setBtnColor(val.rooms[+props.match.params.id].roomDevices[props.index].status)
 
  return(<div> <button className='btn btn-success' style={{background:btnColor}} onClick={()=>{ 
    if(val.rooms[+props.match.params.id].roomDevices[props.index].status=='red'){
       
        
        val.rooms[+props.match.params.id].roomDevices[props.index].status='green'
         setBtnColor( val.rooms[+props.match.params.id].roomDevices[props.index].status)
         
    }
    else if(val.rooms[+props.match.params.id].roomDevices[props.index].status=='green'){
    val.rooms[+props.match.params.id].roomDevices[props.index].status='red'}
    setBtnColor(val.rooms[+props.match.params.id].roomDevices[props.index].status)
  
   
     }}  >{props.device} </button> 
 {/* ################ */}
      

      {/* Delete a device: */}

    <div><h6  style={{color:'red',cursor: 'pointer'}} onClick={()=> props.delete(props.index)}  >Delete</h6></div>

  </div>
)
    

             }} 
</Consumer>

    <br/>
 </div>

    )
 }
 // withRouter enables to access the route di (/:id )
export default withRouter( Device)
