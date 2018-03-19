import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService  {

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  private recipes : Recipe[] = [
    new Recipe('test recipe' , 'This is simply a test' ,  'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
    ,new Recipe('test recipe' , 'This is simply a test' ,  'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
