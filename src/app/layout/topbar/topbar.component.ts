import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
    public appLogo = '/assets/img/logo.png'; // In case we want to get the logo from a config

    constructor() { }

    ngOnInit(): void  {}

    public navigateToParent(): void {

    }

}
