import { RESET_VALID_USER } from "../actions/Actions";

const initialState = false
export const validUser = (state=initialState, action) => {
    switch (action.type){
        case "CHECK_VALID_USER" : return  action.payload
        case RESET_VALID_USER : return state= false;
        default : return state;
    }
 } 
 
 const initialProd =1;
 export const Product = ( state=initialProd, action) => {
    switch(action.type){
        case "CHECK_PRODUCTS" : return action.payload
        default : return state;
    }
 }
 const initialLogin = true   
 export const LoggedIn = (state=initialLogin , action) => {
    switch(action.type){
        case "CHECK_LOGGEDIN" : return action.payload
        default : return state
    }
 }
 //  Form
const initialForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
export const Form= (state = initialForm , action) => {
    switch (action.type) {
      case "UPDATE_FORM":
        return { ...state, ...action.payload };
        case "RESET": return {state};
      default:
        return state;
    }
  }