import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { MealsComponent } from './meals/meals.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { PastaComponent } from './pasta/pasta.component';
import { BraekfastComponent } from './braekfast/braekfast.component';

export const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent , title:"Home Page"},
  {path:"about", component:AboutComponent , title:"About Page"},
  {path:"meals", component:MealsComponent , title:"Meals Page", children:[
    {path:"", redirectTo:"seafood", pathMatch:"full"},
    {path:"seafood", component:SeafoodComponent, title:"Seafood"},
    {path:"pasta", component:PastaComponent, title:"Pasta"},
    {path:"breakfast", component:BraekfastComponent, title:"Breakfast"}
  ]},
  {path:"team", component:TeamComponent , title:"TeamPage"},
  {path:"contact", component:ContactComponent , title:"Contact Page"},
  {path:"**", component:NotfoundComponent, title:"Page Not Found"}
];
