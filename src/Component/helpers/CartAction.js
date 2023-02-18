import {ADD_TO_CART,SUB_QUANTITY,ADD_QUANTITY,ADD_ORDER} from "../helpers/action_types/cart-actions";
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
         id 
    }
}
export const subQuantity= (id)=>{
    return{
        type: SUB_QUANTITY,
         id 
    }
}

export const addQuantity=(id)=>{
    return{
        type:ADD_QUANTITY,
        id
    }
}

export const addOrder=(id)=>{
    return{
        type:ADD_ORDER,
        id
    }
}