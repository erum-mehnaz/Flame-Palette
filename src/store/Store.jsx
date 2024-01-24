import { createStore } from "redux";
import rootReducer from "./reducers/indexReducer";
export const store = createStore(rootReducer)