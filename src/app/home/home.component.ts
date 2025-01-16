import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PragraphComponent } from "../pragraph/pragraph.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, PragraphComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
