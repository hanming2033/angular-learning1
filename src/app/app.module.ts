import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd'
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en'
import { HeaderComponent } from './header/header.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { SignupComponent } from './auth/signup/signup.component'
import { SigninComponent } from './auth/signin/signin.component'
import { RecipesModule } from './recipes/recipes.module'
import { SharedModule } from './shared/shared.module'

registerLocaleData(en)

// can have multiple modules in an angular app
@NgModule({
  // which component, directive or pipes we use
  declarations: [AppComponent, HeaderComponent, ShoppingListComponent, ShoppingEditComponent, SignupComponent, SigninComponent],
  // which other modules we use
  // when using other module, we import everything the module exports
  // module bundles certain functionalities into one
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    SharedModule,
    // * feature module needs to be imported in app module to use its components
    // * feature module with routing needs to be before main routing import for wildcard to work
    RecipesModule,
    AppRoutingModule
  ],
  // which services we may use
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  // defines the root component, starting point
  bootstrap: [AppComponent]
})
export class AppModule {}
