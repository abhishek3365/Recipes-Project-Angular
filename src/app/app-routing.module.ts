import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router"
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuard } from "./auth/auth-guard.service";
import { HomeComponent } from "./home/home.component";

const appRoutes : Routes =  [
    { path : ''  , pathMatch : 'full' , component : HomeComponent },
    { path : 'recipes' , loadChildren : './recipes/recipe.module#RecipeModule'  },
    { path : 'shopping-list' , component : ShoppingListComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule
{
    
}