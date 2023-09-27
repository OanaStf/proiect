import { Component, EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-doilea',
  templateUrl: './doilea.component.html',
  styleUrls: ['./doilea.component.css']
})


export class DoileaComponent {
  @Input() childGivenName: string = "";
  @Output() valueEmmiter = new EventEmitter<any>()

  onClickFromChild(){
    this.valueEmmiter.emit("Salut din comp copil")
  }

}
