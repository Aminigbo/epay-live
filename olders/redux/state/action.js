import {
   LOGIN,
   SIGNUP,
   PRODUCTS,
   addCR,
   CARTAMOUNT
} from './type'

export const loginAction = (user) => {
   return {
      type: LOGIN,
      user
   } 
}


export const signUpAction = (payload) => {
   return {
      type: SIGNUP,
      payload
   }
}

export const dispProducts = (payload) => {
   return {
      type: PRODUCTS,
      payload
   }
}

// add to cart
export const addCRT = (payload) => {
   return {
      type: addCR,
      payload
   }
}

export const dispCartAmt = (amount) => {
   return {
      type: CARTAMOUNT,
      amount
   }
}