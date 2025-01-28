import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrierDetailService } from './../carrier-detail-service';
import { CarrierDetail } from '../entity/carrier-detail';
//import { CarrierDetail } from '../../carrier-detail.model';



@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent implements OnInit {
carrierDetails: CarrierDetail [] = [];

  constructor(private router: Router, private CarrierDetailService: CarrierDetailService) {
    this.carrierDetails = [];
  }
  ngOnInit(): void {
    
    this.getAllcarrierDetails();
  }


  getAllcarrierDetails() {
    this.CarrierDetailService.getAllCarrierDetails().subscribe(data => {
      this.carrierDetails=  <CarrierDetail[]>data;

    }, error=> {
 this.carrierDetails=[];
    });
  }

  addCarrierDetail() {
    this.router.navigate(['carrierdetail/add']);
  }

  deleteCarrierDetail(id: string) {
 this.CarrierDetailService.deleteCarrierDetail(id).subscribe(data=> {
  this.getAllcarrierDetails();
 })
  }


}

