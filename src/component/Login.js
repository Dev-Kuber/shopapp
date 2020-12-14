import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'

function Login({formsubmit, signform, onchangeinput, signout, hasuser, createUser, loginUser, sethasuser}) {

useEffect(()=>{

},[])
    return (
        <div>
         <div className="wrapper fadeInDown">
            <div className="formContent form-group">
              <div class="form-title"> {!hasuser? <h6>Please Log in Here</h6>:<h6>Please Sign Up Here</h6>}</div>
            <form > 
                <div className="form-group">
                <input name="email" className="form-control" placeholder="Enter email here" type="email" value={signform.email}  onChange={onchangeinput} />
                </div>
                <div className="form-group">
                <input name="password" className="form-control" placeholder="Enter password here" type="password" value={signform.password} onChange={onchangeinput} />
                </div>
              
              <div className="outer_button_wrap"> 
                {hasuser?
               <>
               <button className="btn btn-primary" onClick={createUser}><span>Sign Up</span></button>
               <p>Have an account? <span className="link" onClick={()=>{sethasuser(false)}}>Login here</span></p>
               </>
               :
               <>
               <button className="btn btn-primary" onClick={loginUser}><span>Login</span></button>
               <p>Dont have an account? <span className="link"  onClick={()=>{sethasuser(true)}}>Create Account</span></p>
               
               </>
               }
              </div>

            </form>
            <div className="msg">Gobony will not spam your mail</div>
        </div>
        </div>
    </div>
    )
}

export default Login
