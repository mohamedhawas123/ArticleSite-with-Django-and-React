import React from 'react';
import * as actionType from './actionTypes'
import axios from 'axios'


export const authStart = () => {
    return {
        type: actionType.AUTH_START,
        
    }
}

export const authSucess = (username, token) => {
    return {
        type: actionType.AUTH_SUCESS,
        username: username,
        token : token,

    }
}

export const authFail = (error) => {
    return {
        type: actionType.AUTH_FAIL,
        error: error
    }
}

export const authLogout = () => {

    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate')

    return {
        type : actionType.AUTH_LOGOUT
    }
}

export const checkTimeout = expirationDate => {
    return dispatch => {
        setTimeout( () => {
            dispatch(authLogout)
        }, expirationDate * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            username: username,
            password: password

        })
        .then(res => {
            const token = res.data.token
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
            localStorage.setItem('username', username)
            localStorage.setItem('token', token)
            localStorage.setItem('expirationDate', expirationDate)
            dispatch(authSucess(username, token))
            dispatch(checkTimeout(3600))
        })
        .catch(err => {
            dispatch(authFail(err))
        })

    }
}


export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            email : email,
            password1: password1,
            password2: password2

        })
        .then(res => {
            const token = res.data.token;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
            localStorage.setItem('username', username)
            localStorage.setItem('token', token)
            localStorage.setItem('expirationDate', expirationDate)
            dispatch(authSucess(username, token))
            dispatch(checkTimeout(3600))
        })
        .catch(err => {
            dispatch(authFail(err))
        })

    }
}


export const checkState = () => {
    return dispatch => {
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');

        if (token === undefined) {
            dispatch(authLogout())

        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(authLogout())
            } else {
                dispatch(authSucess(username, token))
                dispatch(checkTimeout(3600))
            }
        }
    }
}