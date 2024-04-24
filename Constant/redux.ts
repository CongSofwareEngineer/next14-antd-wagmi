export enum SLICE {
  Setting = 'Setting',
  Language = 'Language',
  UserData = 'UserData'
}

export const WHITE_LIST_PERSIT_REDUX = [SLICE.Language]

export const INIT_STATE = {
  [SLICE.Language]: '',
  [SLICE.Setting]: Object,
  [SLICE.UserData]: Object
} as const
