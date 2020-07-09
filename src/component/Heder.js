import React from "react";
import { Link } from "react-router-dom";

export default function Heder() {
  return (
    <div>
      <div style={{ backgroundColor: "#f1f2eb" }} className='row '>
        <div style={{ marginTop: "10px" }} className='col-4'>
       
          <Link to='/'> Home </Link>
        </div>

        <div className='col-4'> <h2>Smart House</h2>
        </div>
        <div className='col-4'> </div>
      </div>
      <br />
    </div>
  );
}
