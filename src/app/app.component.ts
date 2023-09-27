import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project1';
  numeCopil: string = "Componenta copil"

  constructor(public appService: AppService){}

  evenimentParinte(param: any){
    console.log(param)
  }
  ngOnInit(): void{
    console.log("on init")
    this.appService.getData().subscribe(res => console.log(res))

  }
}
