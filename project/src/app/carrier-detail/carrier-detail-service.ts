import { Injectable } from "@angular/core";
import { UrlConstantService } from "../url-constant.service";
import { DataService } from '../data.service';
import { CarrierDetail } from './entity/carrier-detail';

@Injectable()
export class CarrierDetailService {

    constructor(private url: UrlConstantService, private dataService: DataService) {

    }
    getAllCarrierDetails() {
      return  this.dataService.getAllObjects(this.url.SERVER_PORT + 'carrierdetails')
    }
 

    addCarrierDetail(CarrierDetail: CarrierDetail) {
      return  this.dataService.addObject(this.url.SERVER_PORT + 'carrierdetails',JSON.stringify(CarrierDetail))
    }

    deleteCarrierDetail(id: string) {
      return this.dataService.deleteObject(this.url.SERVER_PORT + 'carrierdetails/'+ id);
    }
}