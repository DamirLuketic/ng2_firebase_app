import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Recipe } from "../recipe";
import { ShoppingListService } from "../../shopping-list";
import { SystemService} from "../system.service";

@Component({

  selector: 'rb-recipe-detail',
  templateUrl: 'system-detail.component.html'
})
export class SystemDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private recipeIndex: number;
  private subscription: Subscription;

  constructor(private sls: ShoppingListService,
              private router: Router,
              private route: ActivatedRoute,
              private systemService: SystemService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.systemService.getRecipe(this.recipeIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/systems', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.systemService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/systems']);
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
