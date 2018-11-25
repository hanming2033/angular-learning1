import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { NZ_I18N, en_US } from 'ng-zorro-antd'
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en'
import { SharedModule } from './shared/shared.module'
import { ShoppingModule } from './shopping-list/shopping.module'
import { AuthModule } from './auth/auth.module'
import { CoreModule } from './core/core.module'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/app.reducers'

registerLocaleData(en)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ShoppingModule,
    AuthModule,
    CoreModule,
    // * reducers is application wide reducer
    StoreModule.forRoot(reducers)
  ],
  // which services we may use
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  // defines the root component, starting point
  bootstrap: [AppComponent]
})
export class AppModule {}
