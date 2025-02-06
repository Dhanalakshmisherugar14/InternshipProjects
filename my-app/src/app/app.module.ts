import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { NgApexchartsModule} from 'ng-apexcharts'
@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    PieChartComponent,
    DonutChartComponent
  ],
  imports: [
  NgApexchartsModule,
  BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
