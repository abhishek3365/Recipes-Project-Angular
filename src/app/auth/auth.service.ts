import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() { }

  token : string;

  signUp( email : string , password : string ){
    
    firebase.auth().createUserWithEmailAndPassword( email , password )
      .then( (response) => console.log( response ))
      .catch( (error) => {
        console.log(error);
      } );
  }
  
  signIn( email : string , password : string ){
    
    firebase.auth().signInWithEmailAndPassword( email , password )
      .then( (response) => {
        console.log( response )
        firebase.auth().currentUser.getToken().then( (token:string) =>{
          this.token = token;
        });
      })
      .catch( (error) => {
        console.log(error);
      } );
  }

  getToken () {
    firebase.auth().currentUser.getToken().then( (token:string) =>{
      this.token = token;
    });
    return this.token;
  }

  isAuthenticated(){
    return this.token!=null;
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }

}
