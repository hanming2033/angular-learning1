import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShoppingListComponent } from './shopping-list.component'
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { SharedModule } from '../shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { shoppingListReducer } from '../store/shoppingStore/shopping-list.reducers'
import { authReducer } from '../store/authStore/auth.reducers'

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [CommonModule, NgZorroAntdModule, SharedModule, ReactiveFormsModule],
  exports: [ShoppingListComponent, ShoppingEditComponent]
})
export class ShoppingModule {}
