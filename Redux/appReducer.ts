import { combineReducers } from '@reduxjs/toolkit'
import { intlReducer } from 'react-intl-redux'
import settingSliceReducer from './settingSlice'
export default combineReducers({
  intl: intlReducer,
  settingSlice: settingSliceReducer
})
