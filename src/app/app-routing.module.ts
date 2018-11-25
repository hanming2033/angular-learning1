import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { SigninComponent } from './auth/signin/signin.component'
import { SignupComponent } from './auth/signup/signup.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { HomeComponent } from './core/home/home.component'

const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  // * lazy load through loadChildren
  // * use file path without .ts and # the class name in the module
  // * best way to auth guard lazily loaded component is to use canLoad;[AuthGuard]
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  { path: '', component: HomeComponent }
]

@NgModule({
  // * PreloadAllModules pre load all modules
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
