import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd'
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en'
import { HeaderComponent } from './header/header.component'
import { RecipesComponent } from './recipes/recipes.component'
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { TestClassDirective } from './shared/directives/test-class.directive'

registerLocaleData(en)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    TestClassDirective
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule, HttpClientModule, NgZorroAntdModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
