import React, { useContext, useState } from 'react'
import './CSS/Longinsinup.css'
import { ShopContext } from '../Contaxt/ShopContext';

function Login() {
     const {url} = useContext(ShopContext)
     
    const [state, setState] = useState("Login"); 

    const [formData, setFormDta] = useState({
      username:"", 
      password:"",
      email:""
    })
    const changeHandler = (e)=>{
       setFormDta({...formData,[e.target.name]:e.target.value})
    }
    const login = async ()=>{
      console.log("Login Function Executed", formData)
      let respnseData; 
      await fetch(url + '/login', {
        method:'POST', 
        headers:{
          Accept:'application/form-data', 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData), 
      }).then((response)=>response.json()).then((data)=>respnseData = data)
      if (respnseData.success){
        localStorage.setItem('auth-token', respnseData.token); 
        window.location.replace("/"); 
      }
      else {
        alert(respnseData.errors)}
    }
    const signup = async ()=>{
      console.log("Sign Up Function Executed", formData)
       
      let respnseData; 
      await fetch(url + '/signup', {
        method:'POST', 
        headers:{
          Accept:'application/form-data', 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData), 
      }).then((response)=>response.json()).then((data)=>respnseData = data)
      if (respnseData.success){
        localStorage.setItem('auth-token', respnseData.token); 
        window.location.replace("/"); 
      }
      else {
        alert(respnseData.errors)}

    }

  return (
    <div className='login-sinup'>
      <div className="loginsinpucontainer">
        <h1>{state}</h1>
        <div className="loginsinup-fieldsloginsinup-fields">
          {state=== "Sign Up"? 
          <input  name='username' placeholder='User Name' value={formData.username} onChange={changeHandler} type="text"  /> : <></>}
          <input  name='email'      value={formData.email}    onChange={changeHandler} type="email" placeholder='Email Address'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password"  placeholder='Password'/>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state === "Sign Up"?<p className="loginsinup-login">Already have an account? <span  onClick={()=>{setState("Login")}}>login</span></p>:
          <p className="loginsinup-login">Create an account <span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>}
        
        <div className="loginagree">
          <input type="checkbox" name=" " id=""  />
          <p>By continuing, i agree the terms of use & privacy plociy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login