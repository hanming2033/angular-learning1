import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'
import { RecipesService } from '../recipes.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]
  selectedId: string
  constructor(private recipeService: RecipesService, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
    this.actRoute.firstChild.params.subscribe(params => {
      this.selectedId = params['id']
    })
  }
}
