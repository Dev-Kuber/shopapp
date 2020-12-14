import { act } from '@testing-library/react';
import {ADD_CART, CURRNT_USER, DECREASE_ITEM, INCREASE_ITEM, REMOVE_ITEM} from '../actions/actions.js'


const Initialstate={
    _cart:[],
    currentauthUser:[]
   
    
}

const reducer=(state=Initialstate, action)=>{

switch (action.type) {
    case ADD_CART:{
        console.log("add cart")
      let _newcart= [...state._cart]

        if(_newcart.length==0){
            let quantity;
            let adcart ={
                id:action.payload.id,
                title:action.payload.title,
                price:action.payload.price,
                quantity:1,
                image:action.payload.image
            }
            _newcart.push(adcart)
           console.log(_newcart)
        }else{
            let iscartupdate= false;
            console.log("cart updated")
            //Updating Cart
           _newcart.map((listitem, id)=>{

                if(listitem.id==action.payload.id){
                    
                  _newcart[id].quantity++
                  
                    iscartupdate =true;
                }
           })
           if(!iscartupdate){
            console.log("cart updated..")
                let newcart ={
                    id:action.payload.id,
                    title:action.payload.title,
                    price:action.payload.price,
                    quantity:1,
                    image:action.payload.image
                     }
                     _newcart.push(newcart)
                             }
                }
                return{...state, _cart:_newcart}
           } 
     case REMOVE_ITEM:
         console.log("removeitem"+action.payload)
        let removedata= state._cart.filter(rem=>{
                return rem.id!==action.payload
         } )
        
         return {...state, _cart:removedata}

     case INCREASE_ITEM:
       
       console.log("increase item"+action.payload);
       
    //   state._cart[action.payload].quantity=state._cart[action.payload].quantity+1

         let _newcart= [...state._cart]  
         _newcart[action.payload].quantity=_newcart[action.payload].quantity+1

            return{...state, _cart:_newcart}

     case DECREASE_ITEM:{
        console.log("deacrese item"+action.payload);

        let _newcart= [...state._cart]  

        if( _newcart[action.payload].quantity>1){
         _newcart[action.payload].quantity=_newcart[action.payload].quantity-1
         }
      
         return{...state, _cart:_newcart}               
        }

    default:
        return state
       
}
}

export default reducer;
