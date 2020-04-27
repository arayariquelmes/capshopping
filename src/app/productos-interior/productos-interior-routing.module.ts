import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosInteriorPage } from './productos-interior.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosInteriorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosInteriorPageRoutingModule {}
