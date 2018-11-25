import { Component, OnInit, OnDestroy } from '@angular/core'
import { Ingredient } from '../../shared/ingredient.model'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
import { Store } from '@ngrx/store'
import { AddIngredient, UpdateIngredient, DeleteIngredient, EndEditing } from '../../store/shoppingStore/shopping-list.actions'
import { AppState } from '../../store/app.reducers'

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

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.shoppingForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      quantity: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)])
    })
    // * subscribe to observable directly
    // * the rest works as per normal
    // ** cannot subscribe to null
    this.subEditing = this.store.select('shoppingList').subscribe(state => {
      const ingr = state.editingItem
      this.editMode = !!ingr.name
      this.originalName = ingr.name
      this.shoppingForm.setValue({
        name: ingr.name,
        quantity: ingr.quantity
      })
    })
  }

  ngOnDestroy() {
    this.subEditing.unsubscribe()
    this.store.dispatch(new EndEditing())
  }

  onSubmit() {
    const ingredient = new Ingredient(this.shoppingForm.value.name, this.shoppingForm.value.quantity)
    if (!this.editMode) {
      this.store.dispatch(new AddIngredient(ingredient))
      this.onClear()
    } else {
      this.store.dispatch(new UpdateIngredient({ name: this.originalName, ingredient }))
      this.onClear()
    }
  }

  onDelete() {
    this.store.dispatch(new DeleteIngredient(this.originalName))
    this.onClear()
  }

  onClear() {
    this.shoppingForm.reset()
    this.editMode = false
  }
}
