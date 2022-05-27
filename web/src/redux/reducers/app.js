import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: {
        mode: 'light'
    }
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.theme.mode = (state.theme.mode === 'light') ? 'dark' : 'light';
        }
    }
})

export const { toggleMode } = appSlice.actions;

export default appSlice.reducer;