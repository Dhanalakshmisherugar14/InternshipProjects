import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarrierDetailRoutingModule } from './carrier-detail-routing.module';
import { CarrierDetailService } from './carrier-detail-service';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewComponent, AddComponent],
  imports: [CommonModule,  CarrierDetailRoutingModule,FormsModule],
  providers: [CarrierDetailService],
})
export class CarrierDetailModule {}
