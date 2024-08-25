'use client'
import { configureStore } from "@reduxjs/toolkit";
import userSession from "./userSession/userSession";

export const myStore = configureStore({
    reducer: {
        userSession: userSession.reducer
    }
})


export type AppDispatch = typeof myStore.dispatch;
export type RootState = ReturnType<typeof myStore.getState>;