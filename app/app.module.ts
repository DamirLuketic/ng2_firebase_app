import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from "./header.component";
import { DropdownDirective } from "./dropdown.directive";
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes.component";
import { SystemListComponent } from "./recipes/systems-list/system-list.component";
import { SystemDetailComponent } from "./recipes/systems-detail/system-detail.component";
import { SystemEditComponent } from "./recipes/systems-edit/system-edit.component";
import { SystemItemComponent } from "./recipes/systems-list/system-item.component";
import { SystemStartComponent } from "./recipes/system-start.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { SystemService } from "./recipes/system.service";
import { routing } from "./app.routing";
import {SystemsComponent} from "./recipes/systems.component";

@NgModule({
  declarations: [
    RecipesComponent,
    SystemsComponent,
    HeaderComponent,
    DropdownDirective,
    ShoppingListAddComponent,
    ShoppingListComponent,
    SystemListComponent,
    SystemDetailComponent,
    SystemEditComponent,
    SystemItemComponent,
    SystemStartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ShoppingListService, SystemService],
  bootstrap: [RecipesComponent]
})
export class AppModule {}
