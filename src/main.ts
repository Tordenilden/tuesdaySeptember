import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// hvis fejl onsdag, så er det sikkert her

// bootstrap => start the application
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
