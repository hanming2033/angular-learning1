import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListActions, ShoppingListActionTypes } from './shopping-list.actions'

// * State is mostly to type Oberservables
export interface ShoppingListState {
  editingItem: Ingredient | null
  ingredients: Ingredient[]
}

// * initial state
const initialState: ShoppingListState = {
  editingItem: new Ingredient(null, null),
  ingredients: [new Ingredient('Apple', 5), new Ingredient('Tomatoes', 5)]
}

// * list of reducers to update state based on the chosen action
export function shoppingListReducer(state = initialState, action: ShoppingListActions): ShoppingListState {
  switch (action.type) {
    case ShoppingListActionTypes.AddIngredient: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      }
    }
    case ShoppingListActionTypes.AddIngredients: {
      const finalIngredients: Ingredient[] = [...state.ingredients]
      const newIngredients: Ingredient[] = JSON.parse(JSON.stringify(action.payload))
      finalIngredients.forEach(ingredient => {
        for (let i = 0; i < newIngredients.length; i++) {
          const ing = newIngredients[i]
          if (ing.name === ingredient.name) {
            ingredient.quantity = ingredient.quantity + ing.quantity
          }
        }
      })
      finalIngredients.push(...newIngredients.filter(ingredient => !finalIngredients.map(fi => fi.name).includes(ingredient.name)))
      return {
        ...state,
        ingredients: [...finalIngredients]
      }
    }
    case ShoppingListActionTypes.UpdateIngredient: {
      const finalIngredients: Ingredient[] = [...state.ingredients]
      const ingredient = finalIngredients.find(ingr => {
        return ingr.name === action.payload.name
      })
      ingredient.name = action.payload.ingredient.name
      ingredient.quantity = action.payload.ingredient.quantity
      return {
        ...state,
        editingItem: null,
        ingredients: finalIngredients
      }
    }
    case ShoppingListActionTypes.DeleteIngredient: {
      const finalIngredients = state.ingredients.filter(ingredient => ingredient.name !== action.payload)
      return {
        ...state,
        ingredients: finalIngredients
      }
    }
    case ShoppingListActionTypes.StartEditing: {
      // * must return the new state
      // * ngrx will use this state to update the existing state
      return {
        ...state,
        editingItem: { ...action.payload }
      }
    }
    case ShoppingListActionTypes.EndEditing: {
      return {
        ...state,
        editingItem: new Ingredient(null, null)
      }
    }
    default: {
      return state
    }
  }
}
