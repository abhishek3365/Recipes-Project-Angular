import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private dsService : DataStorageService ) { }

  ngOnInit() {
  }

  onSaveData(  ){
    this.dsService.storeRecipes().subscribe( (response : Response) => {
      console.log( response );
    } );
  }

  onFetchData() {
    this.dsService.getRecipes();
  }

}
