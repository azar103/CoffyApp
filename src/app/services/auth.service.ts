import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {

   onSignUp(email: string, password: string) {
     return new Promise((resolve, reject) => {
       firebase.auth().createUserWithEmailAndPassword(email, password).then(
         () => {
           resolve();
         },
         (error) => {
           reject(error);
         }
         );
     });
   }

   onSignIn(email: string, password: string) {
       return new Promise((resolve, reject) => {
         firebase.auth().signInWithEmailAndPassword(email, password).then(
           () => {
             resolve();
           },
           (error) => {
             reject(error);
            }
           );
       });
   }
   onSignOut() {
        firebase.auth().signOut();
   }
}
