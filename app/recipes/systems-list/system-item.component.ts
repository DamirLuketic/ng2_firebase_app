import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-system-item',
  templateUrl: 'system-item.component.html'
})
export class SystemItemComponent {
  @Input() recipe: Recipe;
  @Input() recipeId: number;
}
