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
    <div  className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div  className= 'bg-white p-3 rounded w-25'>
           <h1>Order Details</h1>
           <h4>May 18,2023</h4><br>
           </br>
           <strong>  <h7>Order Id:</h7></strong><h7>291</h7><br></br>
           <strong>  <h7>Order Status:</h7></strong><h7>Placed</h7><br></br>
            <strong><h7>Ordered Medicines:</h7></strong>
            <h8>Dolo 650,Azithral 500</h8>
           
            <form>
               <h6></h6>
              <div><button type="submit" className="btn btn-success w-10 rounded-0">close</button></div>
            
              <div> 
        
        
        </div>

           </form>
        </div>
    </div>
  );
}

