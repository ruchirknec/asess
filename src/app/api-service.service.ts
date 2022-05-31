import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

	constructor(
		private http: HttpClient
	) { }

	getRequest(new_data:any) {
		var url = 'https://www.alphavantage.co/query?function=' + new_data.function + "&symbol=" + new_data.symbol + "&interval=" + new_data.interval + "&apikey=" + new_data.apikey;
		return this.http.get<any>(url);
	}

	getFullApi(new_data:any) {
		var url = 'https://www.alphavantage.co/query?function=' + new_data.function + "&symbol=" + new_data.symbol + "&interval=" + new_data.interval + "&outputsize=" + new_data.outputsize + "&apikey=" + new_data.apikey;
		return this.http.get<any>(url);
	}
}
