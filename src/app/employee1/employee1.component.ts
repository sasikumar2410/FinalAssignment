import { Component, OnInit } from '@angular/core';
// import { Employee1Service } from '../Services/employee1.service';
import { Employee2Service } from '../Services/employee2.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component {

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
