/// <reference path="../../../typings/tsd.d.ts" />
import 'reflect-metadata';
import {Component, View, Inject, NgFor} from "angular2/angular2";
import {QuotesService} from "../../services/QuotesService";
import {IQuote} from "../../models/Quote";

@Component({ 
	selector: "home", bindings: [QuotesService]
})
@View({ 
	templateUrl: "app/components/home/home.html",
	directives: [NgFor] 
})
export class Home {
	
	quotes: IQuote[];
	message: string;
	
	constructor(@Inject(QuotesService) public service: QuotesService) {
		
		this.message = "What is going on here?";
		
		service.getRandomQuote()
			   .map((response:any) => response.json().quotes)
			   .subscribe((quotes: IQuote[]) => {
				   console.log(quotes);
				   console.log(`Quotes found in the db: ${quotes.length}`);
				   this.quotes = quotes;
			   })
	}
}