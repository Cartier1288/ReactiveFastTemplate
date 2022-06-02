import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import en_messages from '../../intl/lang/en.json';
import { setLocale as yupSetLocale } from 'yup';
import * as yupLang from 'yup-locales';
import yupEnLocale from "yup/lib/locale";

const initialState = {
    theme: {
        mode: 'light'
    },
    intl: {
        locale: 'en',
        messages: en_messages,
    }
};


export const setLocale = createAsyncThunk(
    'app/setLocale',
    async (locale, { getState }) => {
        const messages = await import(`../../intl/lang/${locale}.json`);

        // use pre-existing translations for yup errors
        // setLocale only takes effect if the schema is recreated
        //   so no queued side-effects
        if(locale !== "en") yupSetLocale(yupLang[locale]);
        else yupSetLocale(yupEnLocale)

        return { locale, messages };
    }
);


export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.theme.mode = (state.theme.mode === 'light') ? 'dark' : 'light';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setLocale.fulfilled, (state, action) => {
            state.intl.locale = action.payload.locale;
            state.intl.messages = action.payload.messages;
        });
    }
});

export const { toggleMode } = appSlice.actions;

export default appSlice.reducer;