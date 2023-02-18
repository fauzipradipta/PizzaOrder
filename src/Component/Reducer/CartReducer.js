import { ADD_TO_CART } from "../helpers/action_types/cart-actions";
import MenuList from "../helpers/MenuList";


const cartReducer=(state=MenuList,action)=>{
    if(action.type === ADD_TO_CART){
        let addedItem = state.menulist.find(item=>item.id === action.id);
        let existedItem = state.addeditems.find(item =>action.id === item.id);

        if(existedItem){
            addedItem.quantity +=1;
            return{
                ...state,
                total: state.total + addedItem.price
            }
        }
        else{
            addedItem.quantity =1; 
            let newTotal = state.total +addedItem.price
            return{
                ...state,
                addedItem:[...state.addeditems, addedItem],
                total:newTotal
            }
        }
    }else{
        return state;
    }
    
}

export default cartReducer;