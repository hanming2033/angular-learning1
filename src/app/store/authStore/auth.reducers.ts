import { AuthActions, AuthActionTypes } from './auth.actions'

export interface AuthState {
  token: string | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false
}

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.Signin:
    case AuthActionTypes.Signup: {
      return {
        ...state,
        isAuthenticated: true
      }
    }
    case AuthActionTypes.Logout: {
      return {
        ...state,
        isAuthenticated: false
      }
    }

    default: {
      return state
    }
  }
}
