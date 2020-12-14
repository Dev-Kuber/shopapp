import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {addcart} from'../actions/actions.js'
import Placeholder from './Placeholder.js';

function Product() {
    const [allProducts, setallProducts] = useState({});

const dispatch = useDispatch();

useEffect( () => {
   const listProducts = async()=>{
    try {
      const productsList= await Axios.get('https://fakestoreapi.com/products')
        setallProducts(productsList.data);
      
    } catch (error) {
        console.log(error)
    }
    
  }
  listProducts()
  
}, [])

const cartclick=(lists)=>{
  
  dispatch(addcart(lists))  
}



    return (
        <>
        {allProducts.length>0?( allProducts.map((listItem, index)=>{
         return (  
        
      
        <div className="col-md-4" key={listItem.id}>
         
            <figure className=" card card-product">
                <div className="img-wrap"><img src={listItem.image} /></div>
               <div className="p-2">
                <figcaption className="info-wrap">
                    <h4 className="title">{listItem.title}</h4>
                      
                </figcaption>
                <div className="bottom-wrap">
                    <button href="" className="btn btn-sm btn-dark float-right" onClick={()=>(cartclick(listItem))} >
                        Add To Cart</button>	

                    <div className="price-wrap h5">
         <span className="price-new">${listItem.price}</span> 
                    </div> 
                </div> 
                </div>
               
	</figure>

    </div>)
    })):<Placeholder/>}
        </>
    )
}

export default Product
