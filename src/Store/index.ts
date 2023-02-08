import {combineReducers, legacy_createStore as createStore} from '@reduxjs/toolkit'
import {authReducer} from "./auth/reducer";

export const store = createStore(combineReducers({
    auth: authReducer,
}))
