import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../conponents/Context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const {getTotalCartAmount,token, food_list,  cartItem, url}= useContext(StoreContext)
  const [data, setData]= useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
  const onChangeHandler = (event) =>{
    const name=event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}))
  }
  const placeOrder = async (event)=>{
    event.preventDefault()
    let orderItems =[]
    food_list.map((item)=>{
      if (cartItem[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id]
        orderItems.push(itemInfo)
      }
    })
   let orderData ={
    address:data,
    items:orderItems,
    amount:getTotalCartAmount()+2
   }
   let response = await axios.post(url+"/api/order/place", orderData, {headers:{token}})
   if (response.data.success){
    const {session_url} = response.data;
    window.location.replace(session_url);
   }else{
    alert("Error")
   }
    
  }

  const navigate = useNavigate()

  useEffect(()=>{
if (!token) {
navigate('/cart')
  
}else if (getTotalCartAmount()===0) {
  navigate('/cart')
}
  },[token])
   
  return (
    <form onSubmit={placeOrder} className='place-order' >
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input  type="text" placeholder='First Name' name='firstName' onChange={onChangeHandler} value={data.firstName}/>
          <input required type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Lanst Name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
        <input required type="text" placeholder='street' name='street' onChange={onChangeHandler} value={data.street}/>
        <div className="multi-fields">
        <input  required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='city' />
          <input required  type="text" placeholder='state' name='state' onChange={onChangeHandler} value={data.state} />
        </div>
        <div className="multi-fields">
          <input required type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='country' />
       
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='phone'/>
         

      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>ETB {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p> ETB{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>ETB {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>

      </div>

      
    </form>
  )
}

export default PlaceOrder
