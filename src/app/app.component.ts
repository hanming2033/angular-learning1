import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-shopping'
  componentToShow = 'recipes'

  onShowComponent(comp: string) {
    this.componentToShow = comp
  }
}
