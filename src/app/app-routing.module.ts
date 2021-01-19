import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntelComponent } from './components/customize/intel/intel.component';
import { HomeComponent } from './container/home/home.component';
import { PcComponentsComponent } from './components/pc-components/pc-components.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'cutomize_intel', component: IntelComponent },
  { path: 'addcomponent', component: PcComponentsComponent },
  { path: 'contactus', component: HomeComponent },
  { path: 'browse-components/:comp', component: ProductListComponent },
  { path: 'addtocart', component: CartComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
