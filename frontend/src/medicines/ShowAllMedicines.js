import React from 'react'
import  { useState } from 'react';
export default function () {
	
	const [selects, setSelects] = useState();
  return (
	
	<div className='table-wrapper'>
	

<buttonGroup>
  <button className='text-decoration-none btn btn-sm btn-success'><h5>Home</h5></button>
  <button className='text-decoration-none btn btn-sm btn-success'><h5>Logout</h5></button>
</buttonGroup>
     
		<table className='table'>
			<th>
				<tr>
					<th>
						<h3>AllMedicines</h3></th>
					<th>
						<div>		
		                <select  onChange={e=>setSelects(e.target.value)}>						  
		<option>Filter By</option>
		   <option> Analgesics</option>
           <option>Anti Hypertensives </option>
		   <option> Urology</option>
		   <option>Gastro Intestinal </option>
		   <option>Anti Infectives</option>
		</select>
		</div></th>
		<th>
			<div className="mb-3">
                  <input type="text" placeholder="Search" />
					  <button className='text-decoration-none btn btn-sm btn-success'>Search</button>
                </div>
			</th>
		   <th><div>
		<select  onChange={e=>setSelects(e.target.value)}>
		<option>Sort By</option>
		   <option>Price:Low to High</option>
           <option>Price:High to Low </option>
		   <option>Name:A to Z</option>
		   <option>Name:Z to A</option>
		</select>
		</div></th>
				</tr>
			</th>
			
		</table>
		
     <table className='table' >
        <thead>
          <tr>
            <th>ID</th>
            <th>Medicine Name</th>
            <th>Category</th>
            <th>Price</th>
			<th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dolo 650</td>
            <td>Analgesics</td>
            <td>29</td>
			<button ><td>Update</td></button>
			<button><td>Delete</td></button>
          </tr>
		  <tr>
            <td>4</td>
            <td>Crocin Advance 650</td>
            <td>Analgesics</td>
            <td>34</td>
			<button><td>Update</td></button>
			<button><td>Delete</td></button>
          </tr>
		  <tr>
            <td>3</td>
            <td>Aciloc 150</td>
            <td>Gastro Intestinal</td>
            <td>40</td>
			<button><td>Update</td></button>
			<button><td>Delete</td></button>
          </tr>
		  <tr>
            <td>6</td>
            <td>Cardivas 3.125</td>
            <td>Anti Hypertensives</td>
            <td>43</td>
			<button><td>Update</td></button>
			<button><td>Delete</td></button>
          </tr>
		  <tr>
            <td>8</td>
            <td>Captopril</td>
            <td>Anti Hypertensives</td>
            <td>89</td>
			<button><td>Update</td></button>
			<button><td>Delete</td></button>
          </tr>
		  <tr>
            <td>2</td>
            <td>Azithral 500</td>
            <td>Anti Infectives</td>
            <td>117</td>
			<button><td>Update</td></button>
			<button><td>Delete</td></button>
          </tr>
		  <tr>
            <td>7</td>
            <td>Rapilif-D 8</td>
            <td>Urology</td>
            <td>390</td>
			<button><td>Update</td></button>
			<button><td>Delete</td></button>
          </tr>
		  <tr>
            <td>9</td>
            <td>Darifenacin</td>
            <td>Urology</td>
            <td>490</td>
			<button><td>Update</td></button>
			<button><td>Delete</td></button>
          </tr>
          <tr>
            <td>5</td>
            <td>Hepthral</td>
            <td>Gastro Intestinal</td>
            <td>946</td>
			<button><td>Update</td></button>
			<button><td>Delete</td></button>
          </tr>           
        </tbody>
      </table>
    </div>
  )
}
