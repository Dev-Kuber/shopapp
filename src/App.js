import react, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Cart from './component/Cart';
import NavBar from './component/NavBar';
import NotFound from './component/NotFound';
import Products from './component/Products';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Login from './component/Login';
import {auth} from "./fireconfig.js"
import Cheackout from './component/Cheackout';
import Footer from './component/Footer';





function App() {
  const [currentuser, setcurrentuser] = useState("")
  const [hasuser, sethasuser] = useState(false)
  const [signform, setsignform] =useState({
    email:"",
    password:""
  
  })
  let history = useHistory();
  

  useEffect(()=>{
    console.log("effect on App")
      
      auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
         setcurrentuser(user)
         console.log(user)
         console.log(currentuser)
        }
      });
      
   
  },[])
  
  // get  Current user
  //cheack user state
  
  //login user
  const loginUser=async(e)=>{
  e.preventDefault()
  
  console.log(signform.email+signform.password)
  if(signform.email&& signform.password){
  try {
  const{user} = await auth.signInWithEmailAndPassword(signform.email, signform.password);
  console.log(user)
  
  history.push("/");
  
  } catch (error) {
    console.log(error)
  }
  }
  setsignform({
    email:"",
    password:""
  })
  }
  //Create user
  const createUser=async(e)=>{
    e.preventDefault()
    
    console.log(signform.email+signform.password)
    try {
     const {user}=  await  auth.createUserWithEmailAndPassword(signform.email, signform.password)
     console.log(user)
     
    } catch (error) {
        console.log(error)
    }
    
    setsignform({
        email:"",
        password:""
    })
    }
   
  //sign out user
  const signout=()=>{
    auth.signOut().then(function() {
      setcurrentuser("")
      history.push('/login') 
        
        
      }).catch(function(error) {
        // An error happened.
      });
  }
  //input handler change
  const onchangeinput=(e)=>{
    setsignform({
    ...signform,
    [e.target.name]:e.target.value
    
  })
  
  }

  return (
    <div className="App">
        <NavBar currentuser={currentuser} signout={signout}/>
          
        <div className="container">  
        <Switch>
       
           <Route path="/" exact component={Products}/>
           <Route path="/cart" exact >
             <Cart
              currentuser={currentuser}
              /> 
            </Route>
            <Route path="/cheackout" exact >
             <Cheackout
              currentuser={currentuser}
              /> 
            </Route>
           
           <Route path="/login" exact >
             <Login
              loginUser={loginUser}
              createUser={createUser} 
              signform={signform} 
              onchangeinput={onchangeinput}
              signout={signout}
              hasuser={hasuser} 
              sethasuser={sethasuser} /> 
            </Route>

           <Route  component={NotFound}/>
           
        </Switch>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
