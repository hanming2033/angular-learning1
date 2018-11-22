import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RecipesComponent } from './recipes.component'
import { RecipeListComponent } from './recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { ReactiveFormsModule } from '@angular/forms'
import { RecipesRoutingModule } from './recipes-routing.module'
import { SharedModule } from '../shared/shared.module'

// * group related components together and remove from app component
@NgModule({
  declarations: [RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeEditComponent],
  // * import required modules
  // * RecipesRoutingModule could simply use AppRoutingModule to reduce complexity
  imports: [CommonModule, NgZorroAntdModule, ReactiveFormsModule, RecipesRoutingModule, SharedModule],
  // * export components for main app to use
  exports: [RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeEditComponent]
})
export class RecipesModule {}
