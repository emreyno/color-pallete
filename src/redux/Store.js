import { configureStore } from '@reduxjs/toolkit';
import ColorReducer from './reducers/ColorReducer';
import userReducer from './reducers/UserReducer';


export default configureStore({
    reducer: {
      color: ColorReducer,
      user: userReducer
    },
  });
  