import CurrencySlicer from "./Features/CurrencySlicer";
import CartSlicer from "./Features/CartSlicer";

import { combineReducers , configureStore} from "@reduxjs/toolkit";
import { persistReducer , persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";

const persistConfig = {
    key : "root",
    storage
} 

const rootReducer = combineReducers({
    currency : CurrencySlicer,
    cart : CartSlicer,
})

const persisted = persistReducer(persistConfig , rootReducer)

export const store = configureStore({
    reducer : persisted,
    middleware : [thunk]
})

export const persistor = persistStore(store)