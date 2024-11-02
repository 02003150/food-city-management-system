import { Routes } from '@angular/router';
import path from 'path';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageFormComponent } from './home-page-form/home-page-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashFormComponent } from './dash-form/dash-form.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
    {   path:'',
        component: HomePageFormComponent
    },
    {
        path:'login-form',
        component: LoginFormComponent
    },
    {
        path:'dash-form',
        component: DashFormComponent
    },
    {
        path:'user-form',
        component: UserFormComponent
    }
];
