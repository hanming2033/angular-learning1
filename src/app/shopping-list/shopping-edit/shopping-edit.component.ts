import { Component, OnInit, OnDestroy } from '@angular/core'
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  shoppingForm: FormGroup
  subEditing: Subscription
  originalName: string
  editMode = false

  constructor(private shoppingList: ShoppingListService) {}

  ngOnInit() {
    this.shoppingForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      quantity: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)])
    })
    this.subEditing = this.shoppingList.startedEditing.subscribe((ingredient: Ingredient) => {
      this.editMode = true
      this.originalName = ingredient.name
      this.shoppingForm.setValue({
        name: ingredient.name,
        quantity: ingredient.quantity
      })
    })
  }

  ngOnDestroy() {
    this.subEditing.unsubscribe()
  }

  onSubmit() {
    const ingredient = new Ingredient(this.shoppingForm.value.name, this.shoppingForm.value.quantity)
    if (!this.editMode) {
      this.shoppingList.addIngredient(ingredient)
      this.onClear()
    } else {
      this.shoppingList.updateIngredient(this.originalName, ingredient)
      this.onClear()
    }
  }

  onDelete() {
    this.shoppingList.deleteIngredient(this.originalName)
    this.onClear()
  }

  onClear() {
    this.shoppingForm.reset()
    this.editMode = false
  }
}
