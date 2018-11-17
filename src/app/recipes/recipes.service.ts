import { Injectable, EventEmitter } from '@angular/core'
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  eRecipeSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[] = [
    new Recipe(
      'Beef Stroganoff',
      'Make a classic beef stroganoff with steak and mushrooms for a tasty midweek meal.',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/09/beefstroganoff.jpg?itok=H6XBu1VQ',
      [new Ingredient('water', 10), new Ingredient('garlic', 2), new Ingredient('sliced mushrooms', 1), new Ingredient('sliced fillet steak', 1)]
    ),
    new Recipe(
      'Spaghetti Bolognese',
      'Ramp up your usual spaghetti Bolognese with this recipe which throws in a few unorthodox methods and ingredients to deliver the ultimate pasta dish',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/09/spaghetti-bolognese.jpg?itok=KzT6QRKe',
      [new Ingredient('tomato purée', 4), new Ingredient('milk', 2), new Ingredient('cheese', 3), new Ingredient('bouillon', 1)]
    ),
    new Recipe(
      'Slow Cooker Lasagne',
      'Slow cook your next lasagne for extra tender mince – and this version is low-fat and low-calorie.',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/09/beeflasagne.jpg?itok=U18p2t8i',
      [new Ingredient('herbs', 1), new Ingredient('fish sauce', 2), new Ingredient('basil', 3), new Ingredient('bouillon', 1)]
    )
  ]
  constructor() {}

  getRecipes() {
    return [...this.recipes]
  }
}
