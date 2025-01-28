import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CarrierDetailModule } from './carrier-detail/carrier-detail.module';
//import { CarrierDetailModule } from './../../../../profile/src/app/carrier-detail/carrier-detail.module';


const routes: Routes = [
  {
    path:'carrierdetail',
    loadChildren: () => import(`./carrier-detail/carrier-detail.module`).then( m=> m.CarrierDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
exports: [RouterModule]
})
export class AppRoutingModule { }
