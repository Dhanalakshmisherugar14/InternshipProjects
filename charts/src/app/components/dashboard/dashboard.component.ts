import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  progressBars = [
    { label: 'Task 1', value: 70, color: 'bg-success' },
    { label: 'Task 2', value: 50, color: 'bg-info' },
    { label: 'Task 3', value: 90, color: 'bg-warning' },
    { label: 'Task 4', value: 30, color: 'bg-danger' }
  ];

  // Radial bar chart options
  public chartOptions: any = {
    series: [70, 50, 90, 60, 80], // Progress percentages for each radial bar
    chart: {
      type: 'radialBar',
      height: 350
    },
    plotOptions: {
      radialBar: {
        // Customize each radial bar
        dataLabels: {
          name: {
            fontSize: '20px',
            fontWeight: 'bold'
          },
          value: {
            fontSize: '16px',
            fontWeight: 'normal'
          }
        },
        // Optionally, adjust the space between bars
        size: '100%',
        hollow: {
          size: '30%'  // Adjust to make room for multiple bars
        }
      }
    },
    labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'] // Labels for each bar
  };

  // Table data
  tableData = [
    { id: 1, name: 'Quinn Flynn', role: 'Android Developer', avatar: 'assets/avatar1.png', timestamp: '11 May 12:30' },
    { id: 2, name: 'Garrett Winters', role: 'Android Developer', avatar: 'charts\src\assets\avatar2.png', timestamp: '11 May 12:30'},
    { id: 3, name: 'Ashton Cox', role: 'Android Developer', avatar: 'assets/avatar3.png', timestamp: '11 May 12:30' },
    { id: 4, name: 'Cedric Kelly', role: 'Android Developer', avatar: 'assets/avatar4.png', timestamp: '11 May 12:30' }
];

}
