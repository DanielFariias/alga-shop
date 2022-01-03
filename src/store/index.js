import { createStore, combineReducers } from "redux";
import { ProductsReducer } from "./reducers/Products/reducer";

const rootReducer = combineReducers({
  products: ProductsReducer
})

export const store = createStore(rootReducer)