import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService  {

  recipeSelected = new EventEmitter<Recipe>();

  constructor( private slService : ShoppingListService ) { }

  private recipes : Recipe[] = [
    new Recipe(
      'test recipe' , 
      'This is simply a test' ,  
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [ new Ingredient ( 'ingredient1' , 1 ),
       new Ingredient ( 'ingredient2' , 2 )]),
    new Recipe(
      'test recipe' , 
      'This is simply a test' ,
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [ new Ingredient ( 'ingredient3' , 3 ),
       new Ingredient ( 'ingredient4' , 4 )])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList( ingredients : Ingredient[] ){
    this.slService.addIngredients(ingredients);
  }

}
