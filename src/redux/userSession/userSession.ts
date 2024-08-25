'use client'
import { createSlice , PayloadAction } from "@reduxjs/toolkit";

const initialState = 0

const userSession = createSlice({
    name: 'userSession',
    initialState,
    reducers : {
        up: ( state , action: PayloadAction<number> ) => (
            state = state + (action.payload)
        ),
        down: ( state , action: PayloadAction<number> ) => (
            state = state - (action.payload)
        ),
    }
})

export default userSession;
export const { up , down } = userSession.actions