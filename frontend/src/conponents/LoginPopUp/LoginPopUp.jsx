import React, {  useContext, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'
import axios from 'axios'

const LoginPopUp = ({setShowLogin}) => {
  const {url, setToken} = useContext(StoreContext)
  const [currentState, SetCurrentState] = useState("Login")
  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })
  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (event) =>{
    event.preventDefault()
    let newUrl = url;
    if(currentState==="Login"){
      newUrl += "/api/user/login"
    }else{
      newUrl += "/api/user/register"
    }
      const response = await axios.post(newUrl, data)
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token)
        setShowLogin(false)

      }else{
        alert(response.data.message)
      }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
        </div>
        <div className="login-popup-input">
          {currentState==="Login"?<></>:<input type="text"  name='name' onChange={onChangeHandler} value={data.name} placeholder='Your Full Name' required />}
          
          <input type="email"  placeholder='Your Email' name='email' onChange={onChangeHandler} value={data.email} required />
          <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='password' required/>
        </div>
        <button type='submit'>{currentState==='Sign Up'?"Create Acount":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>by continuing, i agree to the terms of use and privacy policy.</p>
        </div>
        {currentState==='Login'
        ? <p>Create a new account? <span onClick={()=>SetCurrentState(" Sign Up")}>Clich here</span></p>
        : <p>Already have an account? <span onClick={()=>SetCurrentState("Login")}>Login here</span> </p>

        }
       
        
      </form>
      
    </div>
  )
}

export default LoginPopUp
