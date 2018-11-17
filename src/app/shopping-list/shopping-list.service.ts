import { Injectable, EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  eIngredientChanged = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = []

  constructor() {}

  getIngredients() {
    return [...this.ingredients]
  }

  addIngredient(ing: Ingredient) {
    this.ingredients = [...this.ingredients, ing]
    this.eIngredientChanged.emit([...this.ingredients])
  }

  addIngredients(ingredients: Ingredient[]) {
    const finalIngredients = [...this.ingredients]
    finalIngredients.forEach(ingredient => {
      for (let i = 0; i < ingredients.length; i++) {
        const ing = ingredients[i]
        if (ing.name === ingredient.name) {
          ingredient.quantity += ing.quantity
        }
      }
    })
    finalIngredients.push(...ingredients.filter(ingredient => !finalIngredients.map(fi => fi.name).includes(ingredient.name)))
    this.ingredients = [...finalIngredients]
    this.eIngredientChanged.emit([...this.ingredients])
  }
}
