import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import dataSlice from './slices/dataSlice'
import languageSlice from './slices/languageSlice'

const reducer = combineReducers({
    dataReducer: dataSlice,
    languageReducer: languageSlice
})

const store = configureStore({ reducer })
export default store;