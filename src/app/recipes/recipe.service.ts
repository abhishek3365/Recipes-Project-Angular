import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService  {

  constructor( private slService : ShoppingListService ) { }

  recipeChanged = new Subject<Recipe[]>();

  private recipes : Recipe[] = [
    new Recipe(
      'test recipe 1' , 
      'This is simply a test' ,  
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [ new Ingredient ( 'ingredient1' , 1 ),
       new Ingredient ( 'ingredient2' , 2 )]),
    new Recipe(
      'test recipe 2' , 
      'This is simply a test' ,
      'https://www.theurbanlist.com/content/article/mcdonalds_mcvegan.jpg',
      [ new Ingredient ( 'ingredient3' , 3 ),
       new Ingredient ( 'ingredient4' , 4 )])
  ];

  setRecipes ( recipes : Recipe[] ) {
    this.recipes = recipes;
    this.recipeChanged.next( this.recipes.slice() );
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe( id : number ) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList( ingredients : Ingredient[] ){
    this.slService.addIngredients(ingredients);
  }
  
  addRecipe( recipe : Recipe ){
    this.recipes.push(recipe);
    this.recipeChanged.next( this.recipes.slice() );
  }
  
  updateRecipe( index:number ,  recipe : Recipe ){
    this.recipes[index] = recipe;
    this.recipeChanged.next( this.recipes.slice() );
  }

  deleteRecipe( index : number ) {
    this.recipes.splice( index , 1);
    this.recipeChanged.next( this.recipes.slice() );
  }

}
