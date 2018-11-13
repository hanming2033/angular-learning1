import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Super Delicious', 'As described', 'https://goo.gl/oyuEmj'),
    new Recipe('Super Delicious', 'As described', 'https://goo.gl/oyuEmj'),
    new Recipe('Super Delicious', 'As described', 'https://goo.gl/oyuEmj')
  ]
  constructor() {
    console.log(this.recipes)
  }

  ngOnInit() {}
}
