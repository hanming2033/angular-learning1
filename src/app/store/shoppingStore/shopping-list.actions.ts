import { Action } from '@ngrx/store'
import { Ingredient } from '../../shared/ingredient.model'

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ShoppingListActionTypes {
  AddIngredient = '[ShoppingList] AddIngredient',
  AddIngredients = '[ShoppingList] AddIngredients',
  UpdateIngredient = '[ShoppingList] UpdateIngredient',
  DeleteIngredient = '[ShoppingList] DeleteIngredient',
  StartEditing = '[ShoppingList] StartEditing',
  EndEditing = '[ShoppingList] EndEditing'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class AddIngredient implements Action {
  readonly type = ShoppingListActionTypes.AddIngredient
  constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
  readonly type = ShoppingListActionTypes.AddIngredients
  constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
  readonly type = ShoppingListActionTypes.UpdateIngredient
  constructor(public payload: { name: string; ingredient: Ingredient }) {}
}

export class DeleteIngredient implements Action {
  readonly type = ShoppingListActionTypes.DeleteIngredient
  constructor(public payload: string) {}
}

// * payload type is auto defined by typescript
export class StartEditing implements Action {
  readonly type = ShoppingListActionTypes.StartEditing
  constructor(public payload: Ingredient | null) {}
}

export class EndEditing implements Action {
  readonly type = ShoppingListActionTypes.EndEditing
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ShoppingListActions = AddIngredient | UpdateIngredient | AddIngredients | DeleteIngredient | StartEditing | EndEditing
