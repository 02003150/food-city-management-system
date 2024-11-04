import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [RouterLink,HttpClientModule,FormsModule,CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  productList:any=[];

  constructor(private http:HttpClient){
      this.loadProduct();
  }
  loadProduct(){
    this.http.get("http://localhost:8080/get-product").subscribe(data=>{
      this.productList=data
    })
  }
}
