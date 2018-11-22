import { Component, OnInit, OnDestroy } from '@angular/core'
import { Recipe } from '../recipe.model'
import { RecipesService } from '../recipes.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = []
  selectedId: string
  subRecipeList: Subscription
  constructor(private recipeService: RecipesService, private actRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // this.recipeService.getRecipes().subscribe(data => {
    //   console.log(data)
    // })
    // console.log(this.actRoute)

    // this.paramsSubscription = this.actRoute.firstChild.params.subscribe(params => {
    //   console.log(params)
    //   this.selectedId = params['id']
    // })
    this.subRecipeList = this.recipeService.obsRecipeAdded.subscribe(recipes => {
      this.recipes = recipes
    })
    this.recipeService.onGetRecipes()
  }

  ngOnDestroy(): void {
    this.subRecipeList.unsubscribe()
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.actRoute })
  }
}
