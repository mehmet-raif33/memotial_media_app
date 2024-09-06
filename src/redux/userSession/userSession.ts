'use client'
import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface user {
    isUserHere: boolean
    userName: null | string
}

export const initialState: user = {
    isUserHere : false,
    userName: null,
}

const userSession = createSlice({
    name: 'userSession',
    initialState,
    reducers : {
        login: ( state , action: PayloadAction<user> ) => (
            state = action.payload
        ),
        logout: ( state ) => (
            state = initialState
        ),
    }
})

export default userSession;
export const { login , logout } = userSession.actions