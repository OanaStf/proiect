import { Component } from '@angular/core';

@Component({
  selector: 'app-prima',
  templateUrl: './prima.component.html',
  styleUrls: ['./prima.component.css']
})
export class PrimaComponent {
nume : string = "Oana";
culoare : string = "";
alternativa : string = "  Imaginea nu este ok"

onClick(){
  alert("Am fost apasat")
}
}
