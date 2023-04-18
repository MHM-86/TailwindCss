import { Component, Input } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexMarkers,
  ApexTooltip,
  ApexFill
} from 'ng-apexcharts';

type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
    formatter?: (val: any) => string;
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  seriesNa: ApexNonAxisChartSeries;
  labels: string[];
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive | ApexResponsive[] | any;
  markers: ApexMarkers;
  tooltip: ApexTooltip; 
  fill: ApexFill;
};

@Component({
  selector: 'chart',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent {
  @Input() open! : boolean;
  @Input() chartOptions!: Partial<ChartOptions>;

  constructor() {}
}
