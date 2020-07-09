import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AddRoom from "./component/AddRoom";
import Home from "./component/Home";
import  RoomWithDevices from './component/RoomWithDevices'
import {Provider} from './component/ContextAPI'
// import {Consumer} from './component/ContextAPI'
// import {Link} from 'react-router-dom';
import Heder from './component/Heder'
function App() {
  const [flag,steflag]=useState(false)
  const [rooms, setRooms] = useState([
    { roomName: 'Kitchen',RoomIdName:'aaa', roomColor: '#f9f0f0', roomDevices:[{Device:'Lamp',status:'red'},{Device:'Lamp',status:'red'}] },
    { roomName: 'Bedroom',RoomIdName:'bbb', roomColor: '#f9f0f0', roomDevices:[{Device:'Lamp',status:'red'},{Device:'Lamp',status:'red'}]},
  ]);

 

  return (

    
   <div className='App'>


   <Provider value={{rooms,setRooms}}>
      <Router> 
        <Heder/> 

        <Switch>
            <Route exact path='/'component={()=>{ return <Home />}} /> 
             <Route  path='/addroom' component={()=>{ return <AddRoom />}}  />  
            <Route path='/room/:id' component={()=> { return < RoomWithDevices/>}}/>
         </Switch>     
        </Router>
       </Provider>


    </div>
  
  );
}

export default App;
