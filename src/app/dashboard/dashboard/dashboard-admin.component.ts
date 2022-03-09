import { ReportsService } from './../../../services/reports.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Subscription } from 'rxjs';

@Component({
	selector: 'dashboardAdmin-cmp',

	templateUrl: 'dashboard-admin.component.html',
	styleUrls: ['./dashboard-admin.component.scss'],
})
export class DashboardAdminComponent implements OnInit, OnDestroy {
	public canvas: any;
	public ctx;
	public chartColor;
	public chartEmail;
	public chartSales;
	subscribes: Subscription[] = [];
	countProductos = 0;
	totalSales = 0;
	totalValues = 0;
	totalUsers = 0;
	dataPieChartProducts = [];
	labelPieCharProducts = [];
	colorPieChartProducts = [];
	dataPieChartSales = [];
	labelPieCharSales = [];
	colorPieChartSales = [];
	constructor(private reportsService: ReportsService) {}
	ngOnInit() {
		this.subscribes.push(this.reportsService.getReports().subscribe(res=> {
			console.log(res);
			this.countProductos = res['products'].list.reduce((total, currentValue) => total + currentValue.count, 0);
			this.totalSales = res['sales'].total.reduce((total, currentValue) => total + currentValue.total, 0);
			this.totalValues = res['value'].totalCount;
			this.totalUsers = res['users'].totalCount;
			this.dataPieChartProducts = res['products'].list.map(product => product.count);
			this.labelPieCharProducts = res['products'].list.map(product => product.category);
			this.randomColor(this.colorPieChartProducts, this.dataPieChartProducts.length);
			this.dataPieChartSales = res['sales'].list.map(sales => sales.count);
			this.labelPieCharSales = res['sales'].list.map(sales => sales.product);
			this.randomColor(this.colorPieChartSales, this.dataPieChartSales.length);
			console.log(this.colorPieChartProducts, this.colorPieChartSales)
			this.createGraphics();
		}));
	}

	randomColor(arrayColor:string[], length: number) {
		for(let i = 0; i < length; i++ ) {
			const color = Math.floor(Math.random()*16777215).toString(16);
			arrayColor.push(`#${color}`)
		}
	}
	createGraphics() {		
		this.canvas = document.getElementById('chartProducts');
		this.ctx = this.canvas.getContext('2d');
		this.chartEmail = new Chart(this.ctx, {
			type: 'pie',
			data: {
				labels: this.labelPieCharProducts,
				datasets: [
					{
						label: 'Productos',
						pointRadius: 0,
						pointHoverRadius: 0,
						backgroundColor: this.colorPieChartProducts,
						borderWidth: 0,
						data: this.dataPieChartProducts,
					},
				],
			},

			options: {
				legend: {
					display: true,
				},

				pieceLabel: {
					render: 'percentage',
					fontColor: ['white'],
					precision: 2,
				},

				tooltips: {
					enabled: true,
				},

				scales: {
					yAxes: [
						{
							ticks: {
								display: false,
							},
							gridLines: {
								drawBorder: false,
								zeroLineColor: 'transparent',
								color: 'rgba(255,255,255,0.05)',
							},
						},
					],

					xAxes: [
						{
							barPercentage: 1.6,
							gridLines: {
								drawBorder: false,
								color: 'rgba(255,255,255,0.1)',
								zeroLineColor: 'transparent',
							},
							ticks: {
								display: false,
							},
						},
					],
				},
			},
		});
		this.canvas = document.getElementById('chartSales');
		this.ctx = this.canvas.getContext('2d');
		this.chartSales = new Chart(this.ctx, {
			type: 'pie',
			data: {
				labels: this.labelPieCharSales,
				datasets: [
					{
						label: 'Productos',
						pointRadius: 0,
						pointHoverRadius: 0,
						backgroundColor: this.colorPieChartSales,
						borderWidth: 0,
						data: this.dataPieChartSales,
					},
				],
			},

			options: {
				legend: {
					display: true,
				},

				pieceLabel: {
					render: 'percentage',
					fontColor: ['white'],
					precision: 2,
				},

				tooltips: {
					enabled: true,
				},

				scales: {
					yAxes: [
						{
							ticks: {
								display: false,
							},
							gridLines: {
								drawBorder: false,
								zeroLineColor: 'transparent',
								color: 'rgba(255,255,255,0.05)',
							},
						},
					],

					xAxes: [
						{
							barPercentage: 1.6,
							gridLines: {
								drawBorder: false,
								color: 'rgba(255,255,255,0.1)',
								zeroLineColor: 'transparent',
							},
							ticks: {
								display: false,
							},
						},
					],
				},
			},
		});
	}
	ngOnDestroy(): void {
		this.subscribes.forEach(sub=>sub.unsubscribe());
	}
}
