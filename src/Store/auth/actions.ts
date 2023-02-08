import {AUTH_ACTIONS_TYPES} from "./action-types";

export const updateAuthStatus = (payload: null|number) => ({
    type: AUTH_ACTIONS_TYPES.UPDATE_STATUS,
    payload
})