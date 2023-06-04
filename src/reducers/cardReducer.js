export const cartReducer = (state, action) => {
    console.log("inside delete", action.payload.id);
    switch(action.type){
        case "ADD_PRODUCT":
            return {...state, products : action.payload}
        case "ADD_TO_CART":
            return {...state, cart : [action.payload, ...state.cart] }  
        case "REMOVE_TO_CART":
            console.log("inside delete", action.payload.id);
            return {...state, cart : state.cart.filter(cart => cart.id !== action.payload.id)}     
        case "UPDATE_QYT":
            return {...state, cart : state.cart.filter(c => c.id === action.payload.id ? c.qyt = action.payload.qyt : c.qyt)};    
        default:
            return;
    }
}