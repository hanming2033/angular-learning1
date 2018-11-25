import { Action } from '@ngrx/store'

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum AuthActionTypes {
  Signup = '[Auth] SignupUser',
  Signin = '[Auth] SigninUser',
  Logout = '[Auth] Logout',
  SetToken = '[Auth] SetToken'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class Signup implements Action {
  readonly type = AuthActionTypes.Signup
}

export class Signin implements Action {
  readonly type = AuthActionTypes.Signin
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout
}

export class SetToken implements Action {
  readonly type = AuthActionTypes.SetToken

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type AuthActions = Signup | Signin | Logout | SetToken
