export const ADD_CART= "ADD_CART";
export const REMOVE_ITEM= "REMOVE_ITEM";
export const INCREASE_ITEM= "INCREASE_ITEM";
export const DECREASE_ITEM= "DECREASE_ITEM";
export const CURRNT_USER= "CURRNT_USER";

export const addcart=(payload)=>{
return{
    type:ADD_CART,
    payload
}
}

export const removecart=(payload)=>{
    return{
        type:REMOVE_ITEM,
        payload
    }
    }

export const increascart=(payload)=>{
return{
    type:INCREASE_ITEM,
    payload
}
}

export const decreasecart=(payload)=>{
    return{
        type:DECREASE_ITEM,
        payload
    }
 }

 






