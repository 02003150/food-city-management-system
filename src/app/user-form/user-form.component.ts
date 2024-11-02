import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashFormComponent } from '../dash-form/dash-form.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [RouterLink,DashFormComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

}
