
import React from 'react'
import  { useState } from 'react';
export default function () {
	
	const [selects, setSelects] = useState();
  return (
	
	<div className='table-wrapper'>
		
		
     <table className='table' >
        <thead>
          <tr>
          
            <th>Medicine Name</th>
            <th>Category</th>
            <th>Price</th>
			<th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           
            <td>Dolo 650</td>
            <td>Analgesics</td>
            <td>29</td>
			
			<button><td>Delete</td></button>
          </tr>
          <tr>
           
            <td>Dolo 650 Advance</td>
            <td>Analgesics</td>
            <td>119</td>
			
			<button><td>Delete</td></button>
          </tr>
		  </tbody>
      </table>
      <button><td>Proceed to Pay</td></button>
    </div>
  )
}
