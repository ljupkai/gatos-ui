import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { PreloadAllModules, provideRouter, withPreloading} from '@angular/router';
import { APP_ROUTES } from './app/routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/interceptors/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
  ],
}).catch((e) => console.error(e));
