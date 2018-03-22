import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature : string = 'recipe';

  onNavigate( feature : string )
  {
    this.loadedFeature = feature
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCgje-VV8OdK_t-fNPzuqGW8F9bSvMeMqQ",
      authDomain: "udemy-project-d560b.firebaseapp.com"
    });
  }

}
