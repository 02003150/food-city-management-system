import { Routes } from '@angular/router';
import path from 'path';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageFormComponent } from './home-page-form/home-page-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashFormComponent } from './dash-form/dash-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { OderFormComponent } from './oder-form/oder-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginFormComponent
    },
    
    {
        path:'login-form',
        component: LoginFormComponent
    },
    {
        path:'user-form',
        component: UserFormComponent
    
    },
    {
        path:'supplier-form',
        component: SupplierFormComponent
    },
    {
        path:'oder-form',
        component:OderFormComponent
    },
    {
        path:'customer-form',
        component:CustomerFormComponent
    },
    {
        path:'product-form',
        component:ProductFormComponent
    }
    
];


