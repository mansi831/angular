import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'create', component: CreateProductComponent },
  { path: 'delete', component: DeleteProductComponent },
  { path: 'view', component: ViewProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
