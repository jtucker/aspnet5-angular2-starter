/// <reference path="../typings/tsd.d.ts" />
import 'reflect-metadata';
import {Component, View} from "angular2/angular2";
import {Inject} from "angular2/angular2";
import {ROUTER_DIRECTIVES, ROUTER_BINDINGS, RouteConfig, Router, Location} from "angular2/router";
import {About} from "app/components/about/about";
import {Home} from "app/components/home/home";

@Component({
    selector: "app"
})
@View({
    templateUrl: "app/views/layout.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/", as: "Home", component: Home },
    { path: "/about", as: "About", component: About }
])
export class App {
    router: ngRouter.Router;
    location: ngRouter.Location;

    constructor( @Inject(Router) router: ngRouter.Router,
                 @Inject(Location) location: ngRouter.Location) {       
        this.router = router;
        this.location = location;

        // Naviation rx subscription
        this.router.subscribe((nav) => {
            console.log(`we are navigating to ${nav}`);
        });
    }
}