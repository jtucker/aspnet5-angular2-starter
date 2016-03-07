
import 'reflect-metadata';
import {Inject, Injectable} from "angular2/core";
import {Http, HTTP_PROVIDERS} from "angular2/http";

@Injectable()
export class QuotesService {
	
	constructor(@Inject(Http) private http: Http){		
	}
	
	getRandomQuote() {
		return this.http.get("api/quotes");
	}
 }
