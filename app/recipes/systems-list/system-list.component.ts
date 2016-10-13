import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { SystemService } from "../system.service";

@Component({
  selector: 'rb-system-list',
  templateUrl: 'system-list.component.html'
})
export class SystemListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private systemService: SystemService) {}

  ngOnInit() {
    this.recipes = this.systemService.getRecipes();
    this.systemService.recipesChanged.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
  }

}
