import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { MealsComponent } from './meals/meals.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent , title:"Home Page"},
  {path:"about", component:AboutComponent , title:"About Page"},
  {path:"meals", component:MealsComponent , title:"Meals Page"},
  {path:"team", component:TeamComponent , title:"TeamPage"},
  {path:"contact", component:ContactComponent , title:"Contact Page"},
  {path:"**", component:NotfoundComponent, title:"Page Not Found"}
];
