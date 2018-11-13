import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  name: string
  quantity: number

  constructor() {}

  ngOnInit() {}

  onAdd() {
    console.log('add')
  }
  onDelete() {
    console.log('Delete')
  }
  onClear() {
    console.log('Clear')
  }
}
