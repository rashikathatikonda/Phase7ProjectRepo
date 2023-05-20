import React from 'react'
import  { useState } from 'react';
export default function () {
	
	const [selects, setSelects] = useState();
  return (
	
    <div  className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div  className= 'bg-white p-3 rounded w-25'>
        
        <form>
        <div className="mb-3">
                 
					  <button className='text-decoration-none btn btn-sm btn-success'>Go to Cart</button>
                </div>
                <button className='text-decoration-none btn btn-sm btn-success'>Show All Orders</button>
       </form>
    </div>
</div>
  )
}
