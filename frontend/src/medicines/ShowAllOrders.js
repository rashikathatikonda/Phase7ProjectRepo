import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
      <table className='table' >
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Order Date</th>
            <th>Order Id</th>
            <th>Order Details</th>
			<th>Full Name	</th>
			<th>Contact Number	</th>
			<th>Shipping Address</th>
			<th>Paid Amount</th>  
			<th>Payment Mode</th>
			<th>Order Status</th>
			<th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>May 18,2023</td>
            <td>291</td>
			<button ><td>Show Order</td></button>
			<td>Patha Ramya</td>	
			<td>H.No:4-1-51,Subash Nagar,Karimnagar</td>	
			<td>7894563210</td>	
			<td>490</td>	
			<td>Card Payment</td>	
			<td>Placed</td>	
			<button ><td>Delete Order</td></button>
          </tr>
		  <tr>
            <td>2</td>
            <td>May 19,2023</td>
            <td>108</td>
			<button ><td>Show Order</td></button>
			<td>Thatikonda Rashika</td>	
			<td>H.No:4-1-51,Uppugadda Street,Vemulawada</td>	
			<td>9876543210</td>	
			<td>390</td>	
			<td>Card Payment</td>	
			<td>Placed</td>	
			<button ><td>Delete Order</td></button>
          </tr>
		  <tr>
            <td>3</td>
            <td>May 20,2023</td>
            <td>98</td>
			<button ><td>Show Order</td></button>
			<td>Druthi</td>	
			<td>H.No:4-1-51,Gandhi Nagar,Siddipet</td>	
			<td>8976534201</td>	
			<td>946</td>	
			<td>Card Payment</td>	
			<td>Placed</td>	
			<button ><td>Delete Order</td></button>
          </tr>
		 
            
        </tbody>
      </table>
      </div>
    </div>
  );
}
