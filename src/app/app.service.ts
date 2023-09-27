import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})

export class AppService{
    constructor(public http: HttpClient){}

    getData(){
        console.log("test")
        return this.http.get("http://localhost:8081/resursa2/primulbye")
    }
}