import React from 'react'
import  { useState } from 'react';
export default function () {
	
	const [selects, setSelects] = useState();
  return (
	
    <div  className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div  className= 'bg-white p-3 rounded w-25'>
        <h1>All Medicines are available here....</h1>
        <form>
        <div className="mb-3">
                  <input type="text" placeholder="Search" />
					  <button className='text-decoration-none btn btn-sm btn-success'>Search</button>
                </div>
       </form>
    </div>
</div>
  )
}
