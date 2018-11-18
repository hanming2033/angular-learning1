import { Ingredient } from '../shared/ingredient.model'
export class Recipe {
  public name: string
  public id: string
  public description: string
  public image: string
  public ingredients: Ingredient[]

  constructor(name: string, id: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name
    this.id = id
    this.description = desc
    this.image = imagePath
    this.ingredients = ingredients
  }
}
