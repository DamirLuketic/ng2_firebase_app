import { Routes } from "@angular/router";

import { SystemStartComponent } from "./system-start.component";
import { SystemDetailComponent } from "./systems-detail/system-detail.component";
import { SystemEditComponent } from "./systems-edit/system-edit.component";

export const RECIPE_ROUTES: Routes = [
  { path: '', component: SystemStartComponent },
  { path: 'new', component: SystemEditComponent },
  { path: ':id', component: SystemDetailComponent },
  { path: ':id/edit', component: SystemEditComponent }
];
