import React ,{useState}from 'react'
import { Consumer } from './ContextAPI'
import {Link,Redirect,withRouter }  from 'react-router-dom'
function AddDevice(props) {
    const [device,setDevice]= useState('select')
  

  let validNumOfStereo=true
  let BoilerInBathroom=true
  let validNumOFDevices=true
    // Ensure that devices are added to the appropriate rooms
   const validAndAddDevice=(val)=>{
  props.changeFlag()
         let indexOfRoom= props.match.params.id        
      
        if(val.rooms[+indexOfRoom].roomDevices.length<5||val.rooms[+indexOfRoom].roomName=='Bathroom') 
        {validNumOFDevices=true}
        else{validNumOFDevices=false}

         if( !(val.rooms[+indexOfRoom].roomName=='Bathroom')&&device=='Boiler')
         {BoilerInBathroom=false}
         else if( (val.rooms[+indexOfRoom].roomName=='Bathroom'&&device=='Boiler'))
         {BoilerInBathroom=true}
         else if (val.rooms[+indexOfRoom].roomName=='Bathroom'&&(!(device=='Boiler')))
         {BoilerInBathroom=false}
         else{BoilerInBathroom=true}
       //###################################
       let ObjWithStereo= val.rooms[+indexOfRoom].roomDevices.find( ({ Device }) => Device == 'Stereo')
    //  console.log(ObjWithStereo)
        if((ObjWithStereo)&&device=='Stereo')
        {validNumOfStereo=false 
              }
        else{validNumOfStereo=true}
      
        
        //##############################
        if(validNumOFDevices&& validNumOfStereo&&BoilerInBathroom &&(!(device=='select'))){   
        // val.rooms[+props.match.params.id].roomDevices=[device,...val.rooms[+props.match.params.id].roomDevices] }
        val.rooms[+indexOfRoom].roomDevices=[...val.rooms[+indexOfRoom].roomDevices,{Device:device,status:'red'}] }
         else{ alert('Some input error')}

 }





    return (
        <div className='container' >
       
             
{/* 
//########## */}

 <select className='form-control' onChange={ (e)=>{  
 setDevice( e.target.value)

    }} name='devices' >
    <option value='select'>select</option>
    <option value='Air-Conditioner'>Air-Conditioner</option>
    <option value='Lamp'>Lamp</option>
    <option value='Boiler'>Boiler</option>
    <option value='Stereo'>Stereo</option>
   
  </select>


{/* //################ */}
     
     <Consumer>
        
                {(val)=>{  return  <button className='btn btn-dark mt-4' onClick={() => {validAndAddDevice(val)}} >Add Device</button>
                    }}
    
    </Consumer> 
         
        </div>
    )    
} 
 // withRouter enables to access the route di (/:id )
export default withRouter (AddDevice)