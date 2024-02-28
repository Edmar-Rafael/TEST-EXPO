import AsyncStorage from "@react-native-async-storage/async-storage"
import { NAME, PASSWORD, SESSION_KEY } from "../../config"

const Types = {
  REQUEST: 'login/REQUEST',
  REQUEST_SUCCESS: 'login/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'login/REQUEST_FAILURE'
}

const Creators = {
  request: () => ({
    type: Types.REQUEST,
    data: {
      loading: true,
      error: false
    }
  }),

  requestSuccess: (response) => ({
    type: Types.REQUEST_SUCCESS,
    data: {
      loading: false,
      data: response
    }
  }),

  requestFailure: () => ({
    type: Types.REQUEST_FAILURE,
    data: {
      loading: false,
      error: true
    }
  })
}

export function checkLog() {
  return async (dispatch) => {
    dispatch(Creators.request())
    const isLogged = await AsyncStorage.getItem(`${SESSION_KEY}`)
    if(isLogged) {
      dispatch(Creators.requestSuccess(true))
    } else {
      dispatch(Creators.requestSuccess(false))
    }
  }
}

export function requestLogIn(user) {
  return async (dispatch) => {
    dispatch(Creators.request())
    const { name, password } = user
    try {
      if(name === NAME && password === PASSWORD) {
        await AsyncStorage.setItem(`${SESSION_KEY}`, 'true')
        dispatch(Creators.requestSuccess(true))
      }
    } catch(error) {
      dispatch(Creators.requestFailure())
    }
  }
}

export function logOut() {
  return async (dispatch) => {
    dispatch(Creators.request())
    await AsyncStorage.removeItem(`${SESSION_KEY}`)
    dispatch(Creators.requestSuccess(false))
  }
}

const initialState = {
  loading: false,
  error: false,
  data: false,
}

export default function loginState(state = initialState, action) {
  const { type, data } = action

  switch(type) {
    case Types.REQUEST_SUCCESS: {
      return {...state, ...data}
    }
    case Types.REQUEST_FAILURE: {
      return {...state, ...data} 
    }
    case Types.REQUEST: {
      return {...state, ...data}
    }

    default: {
      return state
    }
  }
}