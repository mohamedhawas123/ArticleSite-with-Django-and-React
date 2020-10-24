import React from 'react'
import {updateObject} from '../utilit'
import * as actionTypes from '../action/actionTypes'

export const initalState = {
    token: null,
    username : null,
    error: null,
    loading: false
}

export const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading : true
    })
}

export const authSucess = (state, action) => {
    return updateObject(state, {
        username: action.username,
        token : action.token,
        error: null,
        loading: false
    })
}

export const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

export const authLogout = (state, action) => {
    return updateObject(state, {
        username: null,
        token : null,

       
    })
}

const reducer = (state= initalState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCESS: return authSucess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
}


export default reducer