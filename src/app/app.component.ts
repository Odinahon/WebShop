import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  template: ` <app-header></app-header> <router-outlet></router-outlet>`,
  
  styles: [],
})
export class AppComponent {
  title = "store";
}
