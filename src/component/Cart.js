import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { decreasecart, increascart, removecart } from '../actions/actions';


export default function Cart({currentuser}) {
  

const allcarts=useSelector(state=>state._cart);

 
const dispatch=useDispatch()

const itemtotel=(price, qnty)=>{
    return Number(price*qnty)
}

const gettotel=()=>{
  let rettotel= allcarts.map(price_=>{
       return price_.quantity*price_.price
   })
   console.log(rettotel)
   let _tot= rettotel.reduce(
    (prev, cur, index)=>prev+cur, 
    0)
    console.log(_tot)
   return _tot.toFixed(2);
}

    return (
        allcarts.length>0 ?
       <div class="mt-5 mb-5 row">
          
            <div className="outer_cart col-lg-8 card">
            <h2 className="cart-item-top">Cart ({allcarts.length}) items</h2>
          
             {allcarts.map((cartitem, key)=>{
               return <><div className="row mb-4 p-2">
                   <div className="col-md-5 col-lg-3 col-xl-3">
                      
                        <div className="rounded mb-3 mb-md-0 cart-img">
                            <img src={cartitem.image} width="100%" alt={cartitem.title} height="100%"/>
                        </div>
                   </div>
                   <div className="col-md-7 col-lg-9 col-xl-9">
                       
                        <div>
                            <div className="d-flex justify-content-between">
                                <div><h5>{cartitem.title}</h5></div>
                              <div>
                                  <div className="mb-3 text-muted text-uppercase small">
                                            <div class="d-flex qnt-btn"> 
                                                    <button className="qnt-btn-minus" 
                                                    onClick={()=>{dispatch( decreasecart(key))}}>-</button>
                                                 
                                                    <span class="price-qnt"> {cartitem.quantity} </span>
                                                  
                                                   <button className="qnt-btn-plus" 
                                                   onClick={()=>{dispatch( increascart(key))}}>+</button>

                                            </div>
                                  </div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                              <button className="delete-btn" onClick={()=>dispatch( removecart(cartitem.id))}>  
                              <i className="fas fa-trash-alt mr-1"></i>
                              </button>
                                </div>
                                <div className="grid">
                                 <strong>  Price ${cartitem.price}</strong>
                                 <span class="total-price-qnt"> Totel Item Price:  ${itemtotel(cartitem.price,cartitem.quantity)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                   
               </div>
               <hr />

               </>
               
             })}
                
                  
                
            </div>
            <div className="outer_cart col-lg-4">
                <div className="p-2 card">
                  <div><h5 class="mb-3">The total amount of</h5></div>
                  <div class="d-flex justify-content-between align-items-center"><h6> Totel Price:</h6> <span><strong>${gettotel()}</strong></span></div>
                  <div className="mt-4 mb-2 checkout_button">
                   {currentuser? <Link to="/cheackout"  class="cheackout-btn btn btn-primary btn-block waves-effect waves-light">
                      go to checkout</Link>
                      :<Link to="/login"  class="cheackout-btn btn btn-primary btn-block waves-effect waves-light">
                      go to checkout</Link>
                    }
                    </div>
                </div>
            </div>
        </div> : 
        <div class="no_found">
            <h3>Your cart is empty! </h3>
            <div><Link to="/"  class="cheackout-btn btn btn-primary btn-block waves-effect waves-light">Shop</Link></div>
        </div>
    )
}
