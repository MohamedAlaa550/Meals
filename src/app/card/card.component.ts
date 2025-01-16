import { Component, Input } from '@angular/core';

interface IMeals {
  strMeal:string;
  strMealThumb:string;
  Desc:string;
  idMeal:string
}

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() mealCard:IMeals = {} as IMeals
}
