import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {

}
