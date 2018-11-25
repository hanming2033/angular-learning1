import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { Ingredient } from '../shared/ingredient.model'
import { Store } from '@ngrx/store'
import { ShoppingListState } from '../store/shoppingStore/shopping-list.reducers'
import { StartEditing } from '../store/shoppingStore/shopping-list.actions'
import { AppState } from '../store/app.reducers'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<ShoppingListState>
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // * select extracts the state from store
    // * assign store state observable to shoppingState
    // * this is for template to retrieve data from observable
    this.shoppingListState = this.store.select('shoppingList')
  }

  onEditItem(name: string, quantity: string) {
    this.store.dispatch(new StartEditing(new Ingredient(name, +quantity)))
  }
}
