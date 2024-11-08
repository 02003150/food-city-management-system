import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashFormComponent } from '../dash-form/dash-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManageUsersFormComponent } from '../manage-users-form/manage-users-form.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [RouterLink,HttpClientModule,CommonModule,FormsModule,ManageUsersFormComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

constructor(private http:HttpClient){
  this.loadUsers();
}
  userList:any=[];

loadUsers(){
    this.http.get("http://localhost:8080/get-user").subscribe(data=>{
      
      this.userList=data;
      
    })
}
}
