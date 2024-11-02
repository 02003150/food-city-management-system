import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashFormComponent } from './dash-form/dash-form.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UserFormComponent } from './user-form/user-form.component';
import { OderFormComponent } from './oder-form/oder-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomePageComponent,LoginFormComponent,DashFormComponent,SupplierComponent,UserFormComponent,OderFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food-city-management-system';
}
