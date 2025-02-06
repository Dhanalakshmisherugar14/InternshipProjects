import { Component, ViewChild } from "@angular/core";
import { ChartComponent, ApexChart, ApexTitleSubtitle } from "ng-apexcharts";

@Component({
  selector: "app-donut-chart",
  standalone: false,
  templateUrl: "./donut-chart.component.html",
  styleUrls: ["./donut-chart.component.css"]
})
export class DonutChartComponent {
  @ViewChild("chart") chart!: ChartComponent;

  chartOptions: {
    series: number[];
    chart: ApexChart;
    labels: string[];
    title: ApexTitleSubtitle;
  } = {
    series: [40, 25, 20, 15],
    chart: {
      type: "donut",
      height: 350
    },
    labels: ["Desktop", "Mobile", "Tablet", "Other"],
    title: {
      text: "Website Traffic by Device"
    }
  };
}
