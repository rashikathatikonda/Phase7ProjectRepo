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
            <h1>Add Medicine</h1>
            <form>
                <div className="mb-3">
                  <label htmlfor="name"><strong>Medicine Name</strong></label>
                   <input type="text" placeholder="Dolo 650" name="name"
                      className="form-control rounded-0"/>
                </div>
                <div className="mb-3">
                  <label htmlfor="email"><strong>Category</strong></label>
                   <input type="email" placeholder="Analgesics" name="email"
                      className="form-control rounded-0"/>
                </div>
                <div className="mb-3">
                  <label htmlfor="password"><strong>Price</strong></label>
                   <input type="password" placeholder="29" name="password"
                      className="form-control rounded-0"/>
                </div>
              <div><button type="submit" className="btn btn-success w-10 rounded-0">AddMedicine</button></div>
              <div><button type="submit" className="btn btn-danger w-10 rounded-0">Reset</button></div>
              <div> 
        
        
        </div>

           </form>
        </div>
    </div>
  );
}

