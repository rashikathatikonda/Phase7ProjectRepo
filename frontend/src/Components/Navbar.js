import React from "react";
import { Link } from "react-router-dom";
import  { useState } from 'react';
export default function Navbar() {
  const [selects, setSelects] = useState();
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link  to="/adduser">            
          </Link>
          <Link to="/adduser">           
          </Link>
          <Link  to="/adduser">            
          </Link>
          <Link  to="/adduser">            
          </Link>
          <Link  to="/adduser">            
          </Link>
          <Link  to="/adduser">            
          </Link>
          
          <Link to="/adduser">           
          </Link>
          <Link to="/adduser">           
          </Link>
          <Link  to="/adduser">         
          </Link>
          <Link  to="/adduser">           
          </Link>
          <Link className="btn btn-outline-light" to="/adduser">
            Home
          </Link>
          <Link className="btn btn-outline-light" to="/adduser">
          Logout
          </Link>
        </div>
      </nav>
    </div>
  );
}
