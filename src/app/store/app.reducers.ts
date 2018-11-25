import { AuthState, authReducer } from './authStore/auth.reducers'
import { ShoppingListState, shoppingListReducer } from './shoppingStore/shopping-list.reducers'
import { ActionReducerMap } from '@ngrx/store'

// * AppState is used for dependency injection: private store: Store<AppState>
export interface AppState {
  shoppingList: ShoppingListState
  auth: AuthState
}

// * reducer for all application state
export const reducers: ActionReducerMap<AppState> = { shoppingList: shoppingListReducer, auth: authReducer }
