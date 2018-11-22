import { NgModule } from '@angular/core'
import { RecipesComponent } from './recipes.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'
import { Routes, RouterModule } from '@angular/router'

// * routing for feature module is a sub set of all routing
const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
      { path: '', component: RecipeDetailComponent, pathMatch: 'full' }
    ]
  }
]

@NgModule({
  declarations: [],
  // * this routes are not attached to main route, so use forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
