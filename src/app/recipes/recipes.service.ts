import { Injectable, OnInit } from '@angular/core'
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  _url = 'https://ng-recipe-book-15551.firebaseio.com/recipes.json'
  obsRecipeAdded = new Subject<Recipe[]>()
  private recipes: Recipe[] = [
    // new Recipe(
    //   'Beef Stroganoff',
    //   'w20f89we',
    //   'Make a classic beef stroganoff with steak and mushrooms for a tasty midweek meal.',
    //   'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/09/beefstroganoff.jpg?itok=H6XBu1VQ',
    //   [
    //     new Ingredient('water', 10),
    //     new Ingredient('garlic', 2),
    //     new Ingredient('sliced mushrooms', 1),
    //     new Ingredient('sliced fillet steak', 1)
    //   ]
    // ),
    // new Recipe(
    //   'Spaghetti Bolognese',
    //   'w20f852e',
    //   'Ramp up your usual spaghetti Bolognese with this recipe which throws in a few unorthodox methods and ingredients to deliver the ultimate pasta dish',
    //   'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/09/spaghetti-bolognese.jpg?itok=KzT6QRKe',
    //   [new Ingredient('tomato purée', 4), new Ingredient('milk', 2), new Ingredient('cheese', 3), new Ingredient('bouillon', 1)]
    // ),
    // new Recipe(
    //   'Slow Cooker Lasagne',
    //   'w29f89we',
    //   'Slow cook your next lasagne for extra tender mince – and this version is low-fat and low-calorie.',
    //   'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/09/beeflasagne.jpg?itok=U18p2t8i',
    //   [new Ingredient('herbs', 1), new Ingredient('fish sauce', 2), new Ingredient('basil', 3), new Ingredient('bouillon', 1)]
    // )
  ]
  constructor(private http: HttpClient, private as: AuthService) {
    this.http.get(this._url).subscribe(data => {
      this.recipes = data as Recipe[]
      this.obsRecipeAdded.next([...this.recipes])
    })
  }

  // getRecipes() {
  //   return [...this.recipes]
  // }

  getRecipe(id: string) {
    return this.recipes.find(r => {
      return r.id === id
    })
  }

  addRecipe = (name: string, description: string, url: string, ingredients: Ingredient[]): string => {
    const id = (Math.floor(Math.random() * 9999999) + 1000000).toString()
    const ingre = ingredients === null ? [] : ingredients
    const r = new Recipe(name, id, description, url, ingre)
    this.recipes.push(r)
    this.obsRecipeAdded.next([...this.recipes])
    return id
  }

  updateRecipe = (id: string, name: string, description: string, url: string, ingredients: Ingredient[]): string => {
    const r = new Recipe(name, id, description, url, ingredients)
    const recipeIndex = this.recipes.findIndex(recipe => recipe.id === id)
    this.recipes[recipeIndex] = r
    this.obsRecipeAdded.next([...this.recipes])
    return id
  }

  deleteRecipe = (id: string) => {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id)
    this.obsRecipeAdded.next([...this.recipes])
  }

  async onSaveRecipes() {
    const token = await this.as.getToken()
    this.http.put(this._url + '?auth=' + token, this.recipes).subscribe(data => {})
  }

  async onGetRecipes() {
    const token = await this.as.getToken()
    this.http.get(this._url + '?auth=' + token).subscribe(data => {
      this.recipes = data as Recipe[]
      this.obsRecipeAdded.next([...this.recipes])
    })
  }
}
