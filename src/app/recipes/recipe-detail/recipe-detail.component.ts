import { Component, OnInit, OnDestroy } from '@angular/core'
import { Recipe } from '../recipe.model'
import { RecipesService } from '../recipes.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { Store } from '@ngrx/store'
import { AddIngredients } from '../../store/shoppingStore/shopping-list.actions'
import { AppState } from '../../store/app.reducers'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe
  sub: Subscription
  constructor(
    private rs: RecipesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    // * dependcy injection in component
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.sub = this.rs.obsRecipeAdded.subscribe(recipes => {
      if (!this.activeRoute.snapshot.params['id'] && recipes.length > 0) {
        const firstId = recipes[0].id
        this.router.navigate([firstId], { relativeTo: this.activeRoute })
      }
    })
    this.activeRoute.params.subscribe(params => {
      this.recipe = this.rs.getRecipe(params['id'])
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  onAddToShoppingList() {
    // * dispathcing actions
    // * each action is a object which is class in es6
    this.store.dispatch(new AddIngredients([...this.recipe.ingredients]))
  }

  onDeleteRecipe() {
    this.rs.deleteRecipe(this.recipe.id)
    this.router.navigate(['../'], { relativeTo: this.activeRoute })
  }
}
