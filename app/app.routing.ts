import { RouterModule, Routes } from '@angular/router';

import { SystemsComponent } from "./recipes/systems.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RECIPE_ROUTES } from "./recipes/recipes.routes";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/systems', pathMatch: 'full'},
  {path: 'systems', component: SystemsComponent, children: RECIPE_ROUTES},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '**', redirectTo: '/systems', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
