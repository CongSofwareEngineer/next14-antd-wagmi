import { SLICE } from '@/Constant/redux'
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  [SLICE.Setting]: null
}
export const settingSlice = createSlice({
  name: SLICE.Setting,
  initialState,
  reducers: {
    setSetting: (state, action) => {
      state[SLICE.Setting] = action.payload
    }
  }
})

export const { setSetting } = settingSlice.actions
export default settingSlice.reducer
