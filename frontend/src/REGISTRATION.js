import React from 'react' 

export default function registration() {
   

    
  return (
    <div  className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div  className= 'bg-white p-3 rounded w-25'>
        <h2> Registration Form</h2>
        <form>
            <div className="mb-3">
              <label htmlfor="name"><strong>FirstName</strong></label>
               <input type="text" placeholder="Enter FirstName" name="name"
                  className="form-control rounded-0"/>
            </div>
            <div className="mb-3">
              <label htmlfor="name"><strong>LastName</strong></label>
               <input type="text" placeholder="Enter LastName" name="name"
                  className="form-control rounded-0"/>
            </div>
            <div className="mb-3">
              <label htmlfor="name"><strong>Contact Number</strong></label>
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
                 <button type="submit" className="btn btn-success w-10 rounded-0">Register</button>
          <div> 
             <div>
                 <h6>or</h6>
                 <label htmlfor="name"><strong>Already have an account?</strong></label></div>
                    <div className="button-container">
                        <button  >Login</button> 
                    </div>
                 </div>   
       </form>
    </div>
</div>
  )
}
