/// <reference path="../../typings/tsd.d.ts" />
import 'reflect-metadata';
import {Inject} from "angular2/angular2";
import {Http} from "angular2/http";
import * as Model from "../models/Quote";

export class QuotesService {
	
	public response: Model.IQuoteServiceResponse;
	
	constructor(@Inject(Http) private http: Http){		
	}
	
	getRandomQuote() {
		console.log("Calling getRandomQuote()");
		var parent = this;
		this.http.get("api/quotes").toRx().subscribe((res: ngHttp.Response) => {
			console.log("Response Received.");		  
		});
	}
 }
