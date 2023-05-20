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
              <label htmlfor="name"><strong>Card Name</strong></label>
               <input type="text" placeholder="Rashika" name="name"
                  className="form-control rounded-0"/>
            </div>
            <div className="mb-3">
              <label htmlfor="email"><strong>Card Number</strong></label>
               <input type="email" placeholder="5678901328943" name="email"
                  className="form-control rounded-0"/>
            </div>
            <div className="mb-3">
              <label htmlfor="password"><strong>CVV Number</strong></label>
               <input type="password" placeholder="...." name="password"
                  className="form-control rounded-0"/>
            </div>

          <button type="submit" className="btn btn-success w-10 rounded-0">Make Payment</button>
          <div> 
          <button type="submit" className="btn btn-danger w-10 rounded-0">close</button>
    </div>

       </form>
    </div>
</div>
	
    
  )
}
