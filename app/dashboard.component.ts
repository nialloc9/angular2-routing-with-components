import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/html/dashboard.component.html',
    styleUrls: ['app/css/dashboard.component.css']
})

export class DashboardComponent{
    constructor(
        private router: Router) {
    }
}