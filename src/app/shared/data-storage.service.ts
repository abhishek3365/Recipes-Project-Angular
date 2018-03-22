import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {

  constructor( private http : Http , private recipeService : RecipeService , private authService : AuthService) { }

  storeRecipes(){
    
    const token = this.authService.getToken();
    
    return this.http.put('https://udemy-project-d560b.firebaseio.com/recipes.jsonauth=' + token , this.recipeService.getRecipes() ) ;
  
  }
  
  getRecipes(){

    const token = this.authService.getToken();

    this.http.get('https://udemy-project-d560b.firebaseio.com/recipes.json?auth=' + token )
      .map( (response : Response) => {
        console.log(response);
        const recipes : Recipe[] = response.json();
        for ( let recipe of recipes ){
          if( !recipe['ingredients'] ){
            recipe['ingredients'] = [];
          }
        } 
        return recipes;
      } )
      .subscribe( (recipes : Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      } ) ;
  }

}
