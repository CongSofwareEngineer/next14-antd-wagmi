import { combineReducers } from '@reduxjs/toolkit'
import { intlReducer } from 'react-intl-redux'
import settingSliceReducer from './settingSlice'
import userDataSliceReducer from './userDataSlice'

export default combineReducers({
  intl: intlReducer,
  setting: settingSliceReducer,
  userData: userDataSliceReducer
})
