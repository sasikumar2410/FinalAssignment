import { Component, OnInit } from '@angular/core';
import { Employee2Service } from '../Services/employee2.service';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component  {

  filteredString:string='';
  
  employees:any=[];
  errMsg:any;
  constructor(proService:Employee2Service){
    proService.getallemp2().subscribe(
      result => this.employees = result,
      error => this.errMsg = error
    )
    }

}
