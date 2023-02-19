import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    url: null,
    data: null,
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        fetchData: (state, action) => {
            state.url = action.payload.url
            state.data = action.payload.data
        }
    }
})

export const { fetchData } = dataSlice.actions

export default dataSlice.reducer