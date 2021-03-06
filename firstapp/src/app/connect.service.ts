import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectService {
  private _url:string = "../apiData/empData.json";
  constructor(private _http:Http) { }
  gerData(){
    return this._http.get("https://jsonplaceholder.typicode.com/posts").map((response:Response)=>response.json()); 
  }

}
