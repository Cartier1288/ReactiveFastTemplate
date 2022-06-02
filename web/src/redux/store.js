import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/app'

export const store = configureStore({
    reducer: {
        app: appReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware();
    },
})