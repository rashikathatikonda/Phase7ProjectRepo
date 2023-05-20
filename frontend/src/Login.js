import React from 'react'

export default function Login() {
  return (
    <div  className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div  className= 'bg-white p-3 rounded w-25'>
            <h1>Login Form</h1>
            <form>
                <div className="mb-3">
                  <label htmlfor="name"><strong>UserName</strong></label>
                   <input type="text" placeholder="Enter UserName" name="name"
                      className="form-control rounded-0"/>
                </div>
                <div className="mb-3">
                  <label htmlfor="email"><strong>Email</strong></label>
                   <input type="email" placeholder="Enter Email" name="email"
                      className="form-control rounded-0"/>
                </div>
                <div className="mb-3">
                  <label htmlfor="password"><strong>Password</strong></label>
                   <input type="password" placeholder="Enter Password" name="password"
                      className="form-control rounded-0"/>
                </div>
              <button type="submit" className="btn btn-success w-10 rounded-0">Login</button>
              <div> 
        <div>
            <h6>or</h6><label htmlfor="name"><strong>Don't have an account?</strong></label></div>
        <div className="button-container">
        <button type="submit" className="btn btn-success w-10 rounded-0">Register</button>
        </div>
        </div>

           </form>
        </div>
    </div>
  )
}
