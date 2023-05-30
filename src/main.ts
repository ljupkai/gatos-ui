import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { PreloadAllModules, provideRouter, withPreloading} from '@angular/router';
import { APP_ROUTES } from './app/routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
  ],
}).catch((e) => console.error(e));
