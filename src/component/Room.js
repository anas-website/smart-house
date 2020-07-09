import React from 'react'
import {Link} from 'react-router-dom';
export default function Room(props) {


    return (
   <div>   
    <div
      style={{backgroundColor:props.roomColor+'D1' ,  border:'solid 2px  black ' , borderRadius:'10px'}}>
      <Link style={{ textDecoration:'none' }} to={'/room/'+props.index}> 
  <div >
       <h3 style={{color:'black' }}  >Room {props.index+1}</h3>
       <h3 style={{color:'black' }} > {props.roomName}</h3> 
       <h3 style={{color:'black' }} >{props.roomIdName}</h3> 
     </div>
   </Link>
  </div>
       <h6 style={{color:'red' ,cursor: 'pointer'}} onClick={()=>{props.del(props.index)}}>Delete</h6> 
       
</div>

    )
}
