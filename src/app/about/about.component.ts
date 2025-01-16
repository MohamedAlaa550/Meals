import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PragraphComponent } from "../pragraph/pragraph.component";

@Component({
  selector: 'app-about',
  imports: [HeaderComponent, PragraphComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
