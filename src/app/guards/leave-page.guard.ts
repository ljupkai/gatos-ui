import { CanDeactivateFn } from "@angular/router";
import { Observable } from "rxjs";
import { GatoFormComponent } from "../gatos/gato-form/gato-form.component";

export interface CanDeactivateComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const leavePageGuard: CanDeactivateFn<GatoFormComponent> = (component) => { return component.canDeactivate? component.canDeactivate() : true;
};
