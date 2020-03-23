import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// basically it's a method that starts the app, platformBrowserDynamic()
// returns an object which has bootstrapModule() method which you can put which module to load first
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
