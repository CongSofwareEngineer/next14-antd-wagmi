export enum SLICE {
  Setting = 'Setting',
  Language = 'Language',
  UserData = 'UserData',
  ConnectedChain = 'ConnectedChain'
}

export const WHITE_LIST_PERSIT_REDUX = [SLICE.Language]

export const INIT_STATE = {
  [SLICE.Language]: '',
  [SLICE.Setting]: Object,
  [SLICE.UserData]: Object,
  [SLICE.ConnectedChain]: 56
} as const

export type TYPE_SLICE = {
  [SLICE.Language]: string
  [SLICE.Setting]: Object
  [SLICE.UserData]: Object
  [SLICE.ConnectedChain]: Number
}


export type TypeStore = {
 app:{
  [SLICE.Language]: string,
  [SLICE.Setting]: Object,
  [SLICE.UserData]: Object,
  [SLICE.ConnectedChain]: Number 
 }
}
