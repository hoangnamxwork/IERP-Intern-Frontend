import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/manager.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  public users:any =[];

  constructor(private api: ApiService){

  }
  ngOnInit() {
    this.api.GetAllUsers().subscribe(res=>{
      this.users = res;
    })
  }
  editUser(){

  }
  deleteUser(){}
  
  saveUser(){}

  modaleditOpen(){
    const model = document.getElementById('editModal');
    if (model != null){
      model.style.display = 'block';
    }
  }
  modaleditClose(){
    const model = document.getElementById('editModal');
    if (model != null){
      model.style.display = 'none';
    }
  }
  modaldeleteToggle(){

}
}