import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {
      const  firebaseConfig = {
        apiKey: "AIzaSyDIPqNBwX6nQsVxGSfwsPPFkiDjerRMe64",
        authDomain: "coffeapp-4008e.firebaseapp.com",
        databaseURL: "https://coffeapp-4008e.firebaseio.com",
        projectId: "coffeapp-4008e",
        storageBucket: "",
        messagingSenderId: "295079276809",
        appId: "1:295079276809:web:5157b14862e607b03023d8"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
}
