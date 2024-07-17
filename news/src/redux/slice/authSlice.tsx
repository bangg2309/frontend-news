import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {users} from "../../data/usersData";
import {User} from "../../interfaces/User";


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
                localStorage.setItem('IsLogin', 'true');
                state.error = null;
            } else {
                state.error = 'Email hoặc mật khẩu không đúng';
            }
        },
        logout: (state) => {
            localStorage.removeItem('IsLogin');
            state.user = null;
            state.error = null;
        },
        updateUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});

export const {login, logout, updateUser} = authSlice.actions;
export default authSlice;
