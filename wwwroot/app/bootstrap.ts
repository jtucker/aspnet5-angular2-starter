/// <reference path="../typings/tsd.d.ts" />
import 'reflect-metadata';
import {bind, bootstrap} from "angular2/angular2";
import {HTTP_BINDINGS} from "angular2/http";
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from "angular2/router";
import {App} from "./App";
import {QuotesService} from "services/QuotesService";

bootstrap(App,
    [HTTP_BINDINGS,
        ROUTER_BINDINGS,   
        bind(LocationStrategy).toClass(HashLocationStrategy)]);