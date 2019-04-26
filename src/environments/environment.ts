// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyBx_HZRC0i6n9ypAYefE_amsyp6Z3n8kGU',
    authDomain: 'ng-timer-6c26b.firebaseapp.com',
    databaseURL: 'https://ng-timer-6c26b.firebaseio.com',
    projectId: 'ng-timer-6c26b',
    storageBucket: 'ng-timer-6c26b.appspot.com',
    messagingSenderId: '624534526527'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
