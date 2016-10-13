import { Component } from '@angular/core';

import { SystemService } from "./recipes/system.service";

@Component({
  selector: 'rb-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {

  constructor(private systemService: SystemService) {}

  onStore() {
    this.systemService.storeData().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  onFetch() {
    this.systemService.fetchData();
  }

}
