import { createStore, combineReducers } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { ProductsReducer } from "./reducers/Products/reducer";

const rootReducer = combineReducers({
  products: ProductsReducer
})

const persistedReducer = persistReducer({
  key: 'root',
  storage
}, rootReducer)

export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)