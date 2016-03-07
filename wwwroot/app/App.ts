
import 'reflect-metadata';
import {Component, View, Inject} from "angular2/core";
import {ROUTER_DIRECTIVES, ROUTER_BINDINGS, ROUTER_PROVIDERS, RouteConfig, Router, Location} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {About} from "./components/about/about";
import {Home} from "./components/home/home";

@Component({
    selector: "app",
    templateUrl: "app/views/layout.html",
    directives: [ROUTER_DIRECTIVES],        
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS]
})
@RouteConfig([
    { path: "/", as: "Home", component: Home },
    { path: "/about", as: "About", component: About }
])
export class App {

    constructor( @Inject(Router) private router: Router,
                 @Inject(Location) private location: Location) {       

        // Naviation rx subscription
        this.router.subscribe((nav) => {
            console.log(`we are navigating to ${nav}`);
        });
    }
}