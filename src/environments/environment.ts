// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBL881x_zWfuUc6h5b3DmQ9mAdtWPKqOXw',
    authDomain: 'cp353-angular-basic.firebaseapp.com',
    databaseURL: 'https://cp353-angular-basic.firebaseio.com',
    projectId: 'cp353-angular-basic',
    storageBucket: 'cp353-angular-basic.appspot.com',
    messagingSenderId: '309752124476'
  }
};
