import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// // Initialize Cloud Firestore through Firebase
// firebase.initializeApp({
//   apiKey: 'AIzaSyBlFFQvwW_34alMcvoeL3Mb02sAVWTii6E',
//   authDomain: 'paperstraws-51033.firebaseapp.com',
//   projectId: 'paperstraws-51033'
// });

// var db = firebase.firestore();