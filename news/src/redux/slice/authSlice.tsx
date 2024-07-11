import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {users} from "../../data/usersData";

interface User {
    email: string;
    password: string;
}

interface AuthState {
    user: User | null;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ email: string; password: string }>) => {
            const {email, password} = action.payload;
            const user = users.find(
                (user) => user.email === email && user.password === password
            );
            if (user) {
                state.user = user;
                state.error = null;
            } else {
                state.error = 'Email hoặc mật khẩu không đúng';
            }
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
        },
    },
});

export const {login, logout} = authSlice.actions;
export default authSlice;
