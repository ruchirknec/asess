import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service'
import { NgxSpinnerService } from "ngx-spinner"; 

@Component({
  selector: 'app-api-req',
  templateUrl: './api-req.component.html',
  styleUrls: ['./api-req.component.css']
})
export class ApiReqComponent implements OnInit {
	Object = Object;
	info:any
	info_time:any

	constructor(
        private apiServiceService: ApiServiceService,
		private spinner: NgxSpinnerService,
    ) { }
	
	ngOnInit(): void {
		this.getApiResponse()
	}

	getApiResponse() {
		this.spinner.show()
		var new_data = {
			'function':'TIME_SERIES_INTRADAY',
			'symbol':'IBM',
			'interval':'5min',
			'apikey':'demo'
		}
		this.apiServiceService.getRequest(new_data).subscribe(
			(data:any)=>{
				console.log(data)
				var data_list = []
				this.info = data['Meta Data']
				this.info_time = data['Time Series (5min)']
				console.log([this.info_time]);
			}
		);
		this.spinner.hide()
	}

}
