import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  itemEvent = output<string>()
  fireParentEvent():void{
    this.itemEvent.emit("")
  }
}
