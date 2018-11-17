import { Component, OnInit, Input } from '@angular/core'
import { Recipe } from '../recipe.model'
import { RecipesService } from '../recipes.service'
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  constructor(private rs: RecipesService, private svcSL: ShoppingListService) {}

  ngOnInit() {
    this.rs.eRecipeSelected.subscribe((r: Recipe) => {
      this.recipe = r
    })
  }

  onAddToShoppingList() {
    this.svcSL.addIngredients(this.recipe.ingredients)
  }
}
