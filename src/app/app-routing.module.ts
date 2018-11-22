import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { SigninComponent } from './auth/signin/signin.component'
import { SignupComponent } from './auth/signup/signup.component'

const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }
]

@NgModule({
  // * this routes are attached to main route, so use forRoot
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
