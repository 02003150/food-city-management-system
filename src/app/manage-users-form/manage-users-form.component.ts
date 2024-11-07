import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-users-form',
  standalone: true,
  imports: [RouterLink,ManageUsersFormComponent],
  templateUrl: './manage-users-form.component.html',
  styleUrl: './manage-users-form.component.css'
})
export class ManageUsersFormComponent {



}
