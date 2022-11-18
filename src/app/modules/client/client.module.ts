import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    HomepageComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
