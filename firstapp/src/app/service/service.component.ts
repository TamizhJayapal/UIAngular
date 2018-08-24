import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
   providers : [ConnectService]
})
export class ServiceComponent implements OnInit {
  empdetails:any=[];
  constructor(private _ConnectService:ConnectService) { }
  ngOnInit() {     
     this._ConnectService.gerData().subscribe(empdetails => this.empdetails = empdetails);  
  }

}
