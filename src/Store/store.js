import { applyMiddleware, createStore } from "redux";
import addFavorites from "./reducer";
//import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
const store = createStore( addFavorites,(applyMiddleware(thunk)))
export default store;