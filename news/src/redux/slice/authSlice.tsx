import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {users} from "../../data/usersData";
import {User} from "../../interfaces/User";


interface AuthState {
    user: User | null;
    error: string | null;
    isLogin: boolean;
}

const initialState: AuthState = {
    user: JSON.parse(sessionStorage.getItem('user') || 'null'),
    error: null,
    isLogin: JSON.parse(sessionStorage.getItem('isLogin') || 'false'),
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
                state.user = action.payload;
                state.error = null;
                state.isLogin = true;
                sessionStorage.setItem('user', JSON.stringify(action.payload));
                sessionStorage.setItem('isLogin', 'true');
            } else {
                state.user = null;
                state.error = 'Email hoặc mật khẩu không đúng';
                state.isLogin = false;
                sessionStorage.setItem('isLogin', 'false');
            }
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
            state.isLogin = false;
            sessionStorage.removeItem('user');
            sessionStorage.setItem('isLogin', 'false');
        },
        updateUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});

export const {login, logout,updateUser} = authSlice.actions;
export default authSlice;
