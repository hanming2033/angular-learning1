import { Component, OnInit } from '@angular/core'
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  name: string
  quantity: number

  constructor(private shoppingList: ShoppingListService) {}

  ngOnInit() {}

  onAdd() {
    this.shoppingList.addIngredient(new Ingredient(this.name, this.quantity))
    this.name = null
    this.quantity = null
  }
  onDelete() {
    console.log('Delete')
  }
  onClear() {
    console.log('Clear')
  }
}
