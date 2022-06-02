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

function condense(obj) {
    console.log(JSON.stringify(obj, null, 3))
    const condensed = {};
    for(const [key, value] of Object.entries(obj)) {
        if(typeof(value) == "string") {
            condensed[key] = value;
        }
        else if(typeof(value) == "object") {
            for(const [vkey, vvalue] of Object.entries(condense(value))) {
                condensed[key + "." + vkey] = vvalue;
            }
        }
    }
    console.log(JSON.stringify(condensed, null, 3))
    return condensed;
}

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

        console.log(JSON.stringify(
            condense({ 
                form: { 
                    errors: {
                        ...formMessages 
                    }
                } 
            }), null, 4
        ));

        // this is for convenience, should eventually
        // be a part of the formatjs compile pipeline
        messages = {
            ...messages,
            ...condense({ 
                form: { 
                    errors: {
                        ...formMessages 
                    }
                } 
            })
        }
    
        console.log(JSON.stringify(messages, null, 4))

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