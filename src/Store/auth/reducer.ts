import {AUTH_ACTIONS_TYPES} from "./action-types";
import {BackendClient} from "Api/client";
import { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  user_id: number|null,
}


const initialState: AuthState = {
    user_id: null,
}

export const authReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
        case AUTH_ACTIONS_TYPES.UPDATE_STATUS:
            return {...state, user_id: action.payload}
        default:
            return state
    }
}