import { combineReducers } from '@reduxjs/toolkit'
import { intlReducer } from 'react-intl-redux'
import settingSliceReducer from './settingSlice'
import userDataSliceReducer from './userDataSlice'
import connectedChainSlice from './connectedChainSlice'

export default combineReducers({
  intl: intlReducer,
  setting: settingSliceReducer,
  userData: userDataSliceReducer,
  connectedChain: connectedChainSlice
})
