import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PragraphComponent } from "../pragraph/pragraph.component";

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent, PragraphComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
