import { Component, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexChart,
  ApexTitleSubtitle
} from "ng-apexcharts";

@Component({
  selector: "app-pie-chart",
  standalone: false,
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"], // ✅ Fixed
})
export class PieChartComponent {
  @ViewChild("chart") chart!: ChartComponent; // ✅ Allows accessing chart instance

  chartOptions: {
    series: number[];
    chart: ApexChart;
    labels: string[];
    title: ApexTitleSubtitle;
  } = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: "pie", // ✅ Fixed
      height: 350,
    },
    labels: ["Apple", "Mango", "Banana", "Grapes", "Orange"],
    title: {
      text: "Fruit Consumption",
    },
  };
}

