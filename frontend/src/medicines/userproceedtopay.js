import React from 'react'
import  { useState } from 'react';
export default function () {
	
	const [selects, setSelects] = useState();
  return (
    <div  className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div  className= 'bg-white p-3 rounded w-25'>
        <h2>Order details</h2>
        <form>
            <div className="mb-3">
              <label htmlfor="name"><strong>UserName</strong></label>
               <input type="text" placeholder="Rashika" name="name"
                  className="form-control rounded-0"/>
            </div>
            <div className="mb-3">
              <label htmlfor="email"><strong>Shipping Address</strong></label>
               <input type="email" placeholder="Uppugadda Street,Vemulawada" name="email"
                  className="form-control rounded-0"/>
            </div>
            <div className="mb-3">
              <label htmlfor="password"><strong>Contact Number</strong></label>
               <input type="password" placeholder="9876543210" name="password"
                  className="form-control rounded-0"/>
            </div>
            
          <button type="submit" className="btn btn-success w-10 rounded-0">Pay Now</button>
          <div> 
    
    </div>

       </form>
    </div>
</div>
	
    
  )
}
