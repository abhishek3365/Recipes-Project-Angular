import { NgModule } from "@angular/core";
import { DropdownDirective } from "../shared/dropdown.directive";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations :[
        ShoppingEditComponent,
        ShoppingListComponent
    ],
    imports : [
        CommonModule,
        SharedModule,
        FormsModule
    ]
})
export class ShoppingListModule{

}