import { Component, OnInit } from '@angular/core';
import { ConnectService } from './connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ConnectService]
})
export class AppComponent {
  empdetails:any;
  title = 'app';
  constructor(private _ConnectService:ConnectService){}
  login(){
    alert(12);
     this._ConnectService.gerData().subscribe(empdetails => this.empdetails = empdetails);
  }
}
