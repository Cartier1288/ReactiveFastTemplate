import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import en_messages from '../../intl/lang/en.json';
import { setLocale as yupSetLocale } from 'yup';
import * as yupLang from 'yup-locales';
import yupEnLocale from "yup/lib/locale";

import { condense } from '../../utils';

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
        let messages = await import(`../../intl/lang/${locale}.json`);

        let formMessages;
        // use pre-existing translations for yup errors
        // setLocale only takes effect if the schema is recreated
        //   so no queued side-effects
        if(locale !== "en") {
            formMessages = yupLang[locale];
        }
        else {
            formMessages = yupEnLocale;
        }
        yupSetLocale(formMessages)

        // this is for convenience, should eventually
        // be a part of the formatjs compile pipeline
        // add English locale as defaults for yup form errors
        messages = {
            ...messages,
            "default": {
                ...messages.default,
                ...condense(yupEnLocale)
            }
        }
    
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