import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { RecipesComponent } from './recipes/recipes.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component'

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [{ path: ':id', component: RecipeDetailComponent }, { path: '', component: RecipeDetailComponent }]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
