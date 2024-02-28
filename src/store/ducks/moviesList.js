import { getMovies } from "../../services/movies"

const Types = {
  REQUEST: 'moviesList/REQUEST',
  REQUEST_SUCCESS: 'moviesList/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'moviesList/REQUEST_FAILURE'
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

export function requestMovies() {
  return async (dispatch) => {
    dispatch(Creators.request())
    try {
      const response = await getMovies()
      dispatch(Creators.requestSuccess(response.data))
    } catch(error) {
      dispatch(Creators.requestFailure())
      alert('No Response')
    }
  }
}

const initialState = {
  loading: true,
  error: false,
  data: []
}

export default function moviesListState(state = initialState, action) {
  const { type, data } = action

  switch(type) {
    case Types.REQUEST_SUCCESS: {
      return {...state, ...data}
    }
    case Types.REQUEST_FAILURE: 
    case Types.REQUEST: {
      return {...state, ...data}
    }

    default: {
      return state
    }
  }
}