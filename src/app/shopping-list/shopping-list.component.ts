import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]
  private subscription: Subscription
  constructor(private shoppingList: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredients()
    this.subscription = this.shoppingList.eIngredientChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    })
  }

  onEditItem(name: string, quantity: string) {
    this.shoppingList.startedEditing.next(new Ingredient(name, +quantity))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
