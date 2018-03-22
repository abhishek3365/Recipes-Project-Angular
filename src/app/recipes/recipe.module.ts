import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DropdownDirective } from "../shared/dropdown.directive";
import { CommonModule } from "@angular/common";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations :[
        RecipesComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeItemComponent,
    ],
    imports : [
        CommonModule,
        ReactiveFormsModule,
        RecipeRoutingModule,
        SharedModule
    ]
})
export class RecipeModule{

}