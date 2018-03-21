import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {

  @ViewChild('f')
  shoppingListForm : NgForm;

  subscription : Subscription;
  editMode = false;
  editedItemIndex : number;  
  editedItem : Ingredient;

  constructor( private slService : ShoppingListService ) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe ( (index  : number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.slService.getIngredient(index);
      this.shoppingListForm.setValue( {
        name : this.editedItem.name , 
        amount : this.editedItem.amount
      } )
    } );
  }

  onAddItem( form : NgForm)
  {
    const newIngredient =  new Ingredient( form.value.name , form.value.amount );
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
