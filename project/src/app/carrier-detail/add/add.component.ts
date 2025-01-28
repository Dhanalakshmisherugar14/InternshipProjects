import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrierDetail } from './../entity/carrier-detail';
import { CarrierDetailService } from './../carrier-detail-service';
@Component({
  selector: 'app-add',
  standalone: false,

  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent implements OnInit {
  carrierName: string = '';

  carrierDetails: any = {};

  academicYearListForDropdown: { academicYear: string }[] = [];

  //CarrierDetail: CarrierDetail;
  carrierType: string[] = [];

  constructor(private router: Router,private CarrierDetailService: CarrierDetailService) {}

  
  ngOnInit(): void {
    this.carrierType = [
      'Working for a company',
      'Self employed',
      'Higher Education'
    ];
  }

  back() {
    this.router.navigate(['carrierdetail/view']);
  }

addCarrierDetail(){
 this.CarrierDetailService.addCarrierDetail(this.carrierDetails).subscribe(data=>{
  this.router.navigate(['carrierdetail/view']);
 })
  }

  addCarrier() {
    if (this.carrierName) {
      this.carrierDetails[this.carrierName] = {
        /* details */
      };
      console.log('Carrier added:', this.carrierName);
      this.carrierName = '';
    } else {
      console.error('Carrier name is required');
    }
  }
}

