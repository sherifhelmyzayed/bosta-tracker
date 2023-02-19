import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'ar'
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload.language
        }
    }
})

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer