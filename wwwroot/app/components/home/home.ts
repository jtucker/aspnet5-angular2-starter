/// <reference path="../../../typings/tsd.d.ts" />
import 'reflect-metadata';
import {Component, View, Inject, NgFor} from "angular2/angular2";
import {QuotesService} from "../../services/QuotesService";

@Component({ 
	selector: "home", bindings: [QuotesService]
})
@View({ 
	templateUrl: "app/components/home/home.html",
	directives: [NgFor] 
})
export class Home {
	constructor(@Inject(QuotesService) public service: QuotesService) {
		service.getRandomQuote();
	}
}