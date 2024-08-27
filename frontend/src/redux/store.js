import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

import { cartReducer } from "./reducers/cartReducer";
import {
  getProductDetailsReducer,
  getProductReducer,
} from "./reducers/productReducer";

// Combine reducers
const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductReducer,
  getProductDetails: getProductDetailsReducer,
});

// Create store with middleware only
const store = createStore(
  reducer,
  applyMiddleware(thunk) // Apply middleware without DevTools
);

export default store;
