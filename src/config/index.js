import {
  REACT_APP_JWT,
  REACT_APP_NAME,
  REACT_APP_PASSWORD,
  REACT_APP_SESSION_KEY
} from '@env'

export const JWT = String(REACT_APP_JWT) 
export const NAME = String(REACT_APP_NAME)
export const PASSWORD = String(REACT_APP_PASSWORD)
export const SESSION_KEY = String(REACT_APP_SESSION_KEY)