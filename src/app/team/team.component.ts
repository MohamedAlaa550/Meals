import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-team',
  imports: [HeaderComponent, ChildComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
@ViewChild("el") childElement!:ElementRef
hideChildComponent():void{
  this.childElement.nativeElement.classList.add("d-none")
}
}
