import { createStore } from "redux";
import rootReducer from "./reducers";
5    
const store = createStore(rootReducer);

export default store