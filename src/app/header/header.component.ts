import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() showComponent = new EventEmitter<string>()
  constructor() {}

  ngOnInit() {}

  onChangeComponent(comp: string) {
    this.showComponent.emit(comp)
  }
}
