import {configureStore} from '@reduxjs/toolkit';
import credReducer from '../features/cred/credSlice';


export const store = configureStore({
    // reducer: credReducer
    reducer: {
        cred: credReducer,
    },
}); 

