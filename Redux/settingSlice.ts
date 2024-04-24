import { INIT_STATE, SLICE } from '@/Constant/redux'
import { createSlice } from '@reduxjs/toolkit'

export const settingSlice = createSlice({
  name: SLICE.Setting,
  initialState: INIT_STATE[SLICE.Setting],
  reducers: {
    setSetting: (state, action) => {
      state[SLICE.Setting] = action.payload
    }
  }
})

export const { setSetting } = settingSlice.actions
export default settingSlice.reducer
