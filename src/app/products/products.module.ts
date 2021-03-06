import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateComponent } from './update/update.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    ProductsComponent, 
    CreateProductComponent, 
    ViewProductComponent, 
    DeleteProductComponent, UpdateComponent, SearchComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
