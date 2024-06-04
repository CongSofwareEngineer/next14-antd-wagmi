import { combineReducers } from '@reduxjs/toolkit'
import { intlReducer } from 'react-intl-redux'
import settingSliceReducer from './settingSlice'
import userDataSliceReducer from './userDataSlice'
import connectedChainSlice from './connectedChainSlice'
import { SLICE } from '@/Constant/redux'

export default combineReducers({
  intl: intlReducer,
  [SLICE.Setting]: settingSliceReducer,
  [SLICE.UserData]: userDataSliceReducer,
  [SLICE.ConnectedChain]: connectedChainSlice
})
