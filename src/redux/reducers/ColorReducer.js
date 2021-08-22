import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'color',
  initialState: {
    colors: []
  },
  reducers: {
    addColor: (state, action) => {
      const newColor = {
        hex: action.payload.hex,
        rgb:action.payload.rgb,
        weight:action.payload.weight,
      };

      state.colors.unshift(newColor);
    },
    removeColor:(state,action)=>{
        state.colors.splice(action.payload, 1);
    },
   
  },
});

export const { addColor, removeColor} = todoSlice.actions;
export default todoSlice.reducer;