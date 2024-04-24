import { INIT_STATE, SLICE } from '@/Constant/redux'
import { createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
  name: SLICE.UserData,
  initialState: INIT_STATE[SLICE.UserData],
  reducers: {
    setUserData: (state, action) => {
      state[SLICE.UserData] = action.payload
    }
  }
})

export const { setUserData } = userDataSlice.actions
export default userDataSlice.reducer
