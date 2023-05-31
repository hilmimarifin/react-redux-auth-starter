import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

export interface UserState {
    is_login: boolean
}

const initialState: UserState = {
    is_login: localStorage.getItem("is_login") === 'true',
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state) => {
            state.is_login = true
            localStorage.setItem("is_login", JSON.stringify(true))
        },
        signOut: (state) => {
            state.is_login = false
            localStorage.setItem("is_login", JSON.stringify(false))
        },
    },
})

export const { signIn, signOut } = userSlice.actions

export const selectUser = (state: RootState) => state.user.is_login

export default userSlice.reducer
