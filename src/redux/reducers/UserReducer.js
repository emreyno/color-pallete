import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    {
      username: 'admin',
      password: 'admin',
      name: 'Elymer',
    },
   
  ],
  loginUsers: [],
  invalidLogin: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
    state.loginUsers.push(action.payload);
    },
    logout: (state) => {
      state.loginUsers=[];
    }
  },
})

export const { login , logout } = userSlice.actions

export default userSlice.reducer