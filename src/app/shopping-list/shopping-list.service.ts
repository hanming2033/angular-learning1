import { Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  eIngredientChanged = new Subject<Ingredient[]>()
  startedEditing = new Subject<Ingredient>()
  private ingredients: Ingredient[] = []

  constructor() {}

  getIngredients() {
    return [...this.ingredients]
  }

  addIngredient(ing: Ingredient) {
    this.ingredients = [...this.ingredients, ing]
    this.eIngredientChanged.next([...this.ingredients])
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
    this.eIngredientChanged.next([...this.ingredients])
  }

  updateIngredient(originalName: string, ing: Ingredient) {
    const finalIngredients: Ingredient[] = JSON.parse(JSON.stringify(this.ingredients))
    const ingredient = finalIngredients.find(ingr => {
      return ingr.name === originalName
    })
    ingredient.name = ing.name
    ingredient.quantity = ing.quantity
    this.ingredients = finalIngredients
    this.eIngredientChanged.next([...this.ingredients])
  }

  deleteIngredient(originalName: string) {
    const finalIngredients = this.ingredients.filter(ingredient => ingredient.name !== originalName)
    this.ingredients = finalIngredients
    this.eIngredientChanged.next([...this.ingredients])
  }
}
