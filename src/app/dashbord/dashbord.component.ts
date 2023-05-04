import { Component } from '@angular/core';
import { RequestService } from '../core/service/request.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  stats: any;
  approvedCount!: number;
  declinedCount!: number;

  constructor(private service:RequestService){}
  
  ngOnInit(): void {
    // call API to get credit stats data
   
  }

  drawCreditStatsChart(): void {
    // get canvas element and create chart context
    const canvas: HTMLCanvasElement = document.getElementById('creditStatsChart') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
    // create chart data and options
    const chartData = {
      labels: ['Approved', 'Declined'],
      datasets: [{
        data: [this.approvedCount, this.declinedCount],
        backgroundColor: ['#36A2EB', '#FF6384']
      }]
    };
    const chartOptions = {
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
    // create chart
   /* new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });*/
  }
}
