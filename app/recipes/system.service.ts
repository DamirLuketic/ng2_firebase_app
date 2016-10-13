import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { Recipe } from "./recipe";
import { Ingredient } from "../shared";

@Injectable()
export class SystemService {
  recipesChanged = new EventEmitter<Recipe[]>();
  
  private recipes: Recipe[] = [
    new Recipe('System 01', 'Good bass', "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSdpUiMw1y-35RIBoKrO2AuvDudBFUVU4MHBS5bKegBqp-aZibr", [
      new Ingredient('Pimienta 2', 800),
      new Ingredient('NAD D 3050', 600)
    ]),
    new Recipe('System 02', 'Ok', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCIFQ4oM2_-iAoZlC_qkmS9a_Misv_AUriqbIgkM7jMgGSorKoJQ', [])
  ];

  constructor(private http: Http) {}

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://hifisystems-e3f4e.firebaseio.com/systems.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://hifisystems-e3f4e.firebaseio.com/systems.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }

}
