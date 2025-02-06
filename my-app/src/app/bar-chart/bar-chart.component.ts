import { Component, ViewChild } from "@angular/core";
import { ChartComponent, ApexChart, ApexXAxis, ApexTitleSubtitle } from "ng-apexcharts";

@Component({
  selector: "app-bar-chart",
  standalone: false,
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent {
  @ViewChild("chart") chart!: ChartComponent;

  chartOptions: {
    series: { name: string; data: number[] }[];
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
  } = {
    
      
        series: [
          {
            name: "Sales",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ],
        chart: {
          type: "bar",
          height: 350
        },
        title: {
          text: "Monthly Sales"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
        }
      };
    }

