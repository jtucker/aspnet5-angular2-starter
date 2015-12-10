/// <reference path="../../typings/tsd.d.ts" />
import 'reflect-metadata';
import {Inject, Injectable} from "angular2/angular2";
import {Http} from "angular2/http";

@Injectable()
export class QuotesService {
	
	constructor(@Inject(Http) private http: Http){		
	}
	
	getRandomQuote() {
		return this.http.get("api/quotes").toRx();
	}
 }
