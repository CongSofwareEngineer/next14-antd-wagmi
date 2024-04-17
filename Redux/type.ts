import { SLICE } from '@/Constant/redux'
import { IntlState } from 'react-intl-redux'

export type TYPE_STATE_REDUCER = {
  intl: IntlState,
  settingSlice: { [SLICE.Setting]: null }
}
