import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [

  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'searchProd',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
