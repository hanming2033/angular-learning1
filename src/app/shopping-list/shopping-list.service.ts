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

  addIngredients(incomingIngr: Ingredient[]) {
    const finalIngredients = JSON.parse(JSON.stringify(this.ingredients))
    const newIngredients = JSON.parse(JSON.stringify(incomingIngr))
    finalIngredients.forEach(ingredient => {
      for (let i = 0; i < newIngredients.length; i++) {
        const ing = newIngredients[i]
        if (ing.name === ingredient.name) {
          ingredient.quantity = ingredient.quantity + ing.quantity
        }
      }
    })
    finalIngredients.push(...newIngredients.filter(ingredient => !finalIngredients.map(fi => fi.name).includes(ingredient.name)))
    this.ingredients = [...finalIngredients]
    this.eIngredientChanged.emit([...this.ingredients])
  }
}
