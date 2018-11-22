import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { RecipesService } from '../recipes.service'
import { Recipe } from '../recipe.model'
import { Ingredient } from 'src/app/shared/ingredient.model'

interface FormValues {
  name: string
  url: string
  description: string
  ingredients: Array<{ name: string; quantity: number }>
}

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: string
  editMode = false

  recipeForm: FormGroup

  constructor(private actRoute: ActivatedRoute, private recipesvc: RecipesService, private router: Router) {}

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.id = params['id']
      this.editMode = params['id'] !== null && params['id'] !== undefined
      this.initForm()
    })
  }

  private initForm = () => {
    let loadedRecipe: Recipe
    if (this.editMode) {
      loadedRecipe = this.recipesvc.getRecipe(this.id)
    } else {
      loadedRecipe = new Recipe(null, null, null, null, null)
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(loadedRecipe.name, Validators.required),
      url: new FormControl(loadedRecipe.image, Validators.required),
      description: new FormControl(loadedRecipe.description, Validators.required),
      ingredients: new FormArray(
        loadedRecipe.ingredients
          ? loadedRecipe.ingredients.map(ingredient => {
              return new FormGroup({
                name: new FormControl(ingredient.name, Validators.required),
                quantity: new FormControl(ingredient.quantity, [Validators.required, Validators.pattern(/^\d+$/)])
              })
            })
          : []
      )
    })
  }

  onSubmit() {
    const value: FormValues = this.recipeForm.value
    const ingredients: Ingredient[] = value.ingredients.map(ingredient => new Ingredient(ingredient.name, ingredient.quantity))
    if (!this.editMode) {
      const id = this.recipesvc.addRecipe(value.name, value.description, value.url, ingredients)
      this.onClear()
      this.router.navigate(['../', id], { relativeTo: this.actRoute })
    } else {
      const id = this.recipesvc.updateRecipe(this.id, value.name, value.description, value.url, ingredients)
      this.router.navigate(['../'], { relativeTo: this.actRoute })
    }
  }

  addIngredient = () => {
    const control = new FormGroup({
      name: new FormControl(null, Validators.required),
      quantity: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)])
    })
    const formArray = this.recipeForm.get('ingredients') as FormArray
    formArray.push(control)
  }

  getIngredientCtrls = () => {
    return (<FormArray>this.recipeForm.get('ingredients')).controls
  }

  onDeleteIngredient = (index: number) => {
    const ingredientCtrls = this.recipeForm.get('ingredients') as FormArray
    ingredientCtrls.removeAt(index)
  }

  onClear = () => {
    this.router.navigate(['../'], { relativeTo: this.actRoute })
  }
}
