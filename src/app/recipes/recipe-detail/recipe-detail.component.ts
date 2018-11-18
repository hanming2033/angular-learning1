import { Component, OnInit, Input } from '@angular/core'
import { Recipe } from '../recipe.model'
import { RecipesService } from '../recipes.service'
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  constructor(
    private rs: RecipesService,
    private svcSL: ShoppingListService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.activeRoute.snapshot.params['id'] && this.rs.getRecipes().length > 0) {
      const firstId = this.rs.getRecipes()[0].id
      this.router.navigate([firstId], { relativeTo: this.activeRoute })
    }
    this.activeRoute.params.subscribe(params => {
      this.recipe = this.rs.getRecipe(params['id'])
    })
  }

  onAddToShoppingList() {
    this.svcSL.addIngredients([...this.recipe.ingredients])
  }
}
