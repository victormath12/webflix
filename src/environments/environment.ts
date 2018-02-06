// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCAKPQNRYqz6oTsy-cNcQ0kAAPSy-Fc3qo',
    authDomain: 'webflix-app.firebaseapp.com',
    databaseURL: 'https://webflix-app.firebaseio.com',
    projectId: 'webflix-app',
    storageBucket: 'webflix-app.appspot.com',
    messagingSenderId: '842026342622'
  }
};
