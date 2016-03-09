
import 'reflect-metadata';
import {Component, View, Inject} from "angular2/core";
import {QuotesService} from "../../services/QuotesService";
import "rxjs/add/operator/map";
import {IQuote} from "../../models/Quote";

@Component({ 
	selector: "home", bindings: [QuotesService]
})
@View({ 
	templateUrl: "app/components/home/home.html"
})
export class Home {
	
	quotes: IQuote[];
	message: string;
	
	constructor(@Inject(QuotesService) public service: QuotesService) {
		
		this.message = "What is going on here?";
		
		service.getRandomQuote()
               
			   .map(response => response.json())
			   .subscribe(data => {
				   console.log(data);				   
			   })
	}
}