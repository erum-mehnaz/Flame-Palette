import { combineReducers } from "redux";
import { validUser,Product,LoggedIn,Form } from "./Reducers";
const rootReducer = combineReducers({
    validUser,
    Product,
    LoggedIn,
    Form
   })

   export default rootReducer;