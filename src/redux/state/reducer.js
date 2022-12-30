import {
   LOGIN,
   SIGNUP,
   PRODUCTS,
   addCR,
   CARTAMOUNT
} from './type'


const initialState = {
   loggedIn: false,
   loggedInUser: '',
   products: [],
   cart: [],
   CRTamt:0
   

}





const reducer = (state = initialState, action) => {
   switch (action.type) {
      case LOGIN:
         return {
            ...state,
            loggedIn: true,
            loggedInUser: action.user
         }
      case SIGNUP:
         return {
            ...state,
            loggedIn: true,
            loggedInUser:action.payload
            
         }
      
      case PRODUCTS:
         return {
            ...state, 
            products: action.payload
         }
      
      case addCR:
         return {
            ...state,
            cart:action.payload
         }
      case CARTAMOUNT:
         return {
            ...state,
            CRTamt:action.amount

         }
       

      default: return state
   }
}

export default reducer