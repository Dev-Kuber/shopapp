import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link , NavLink} from 'react-router-dom'
import logo from '../images/logo.png';

function NavBar({currentuser, signout}) {
const [numb, setnumb] = useState({
    cartnumber:0
});

    const getcart=useSelector(state=>state._cart);

   
useEffect(()=>{
   setnumb({
       cartnumber:getcart.length
   })
 console.log(getcart);

},[getcart.length]);


    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">  
            <Link className="navbar-brand" to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
               
                <div className="" id="navbarNavAltMarkup">
                    <div className="ml-auto navbar-nav">
                    <NavLink className="nav-item nav-link" to="/">Products</NavLink>
                    
                   {!currentuser?<NavLink className="nav-item nav-link" to="/login">Login</NavLink>:<NavLink onClick={signout} className="nav-item nav-link" to="/login">Logout</NavLink>}
                <NavLink className="nav-item nav-link cartss" to="/cart"><i class="fas fa-shopping-cart"></i> {numb.cartnumber>0?<span className="span-qnt">{numb.cartnumber}</span>:""}</NavLink>
              
                   
                    </div>
            </div>
            </div>
            </nav>
            
        </div>
    )
}

export default NavBar
