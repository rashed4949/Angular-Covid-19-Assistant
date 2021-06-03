import { AdminPanelService } from './../../service/admin.panel.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
    selector: 'test-center',
    templateUrl: './test.center.component.html',
    styleUrls: ['./test.center.component.css']
})
export class TestCenterComponent implements OnInit, OnDestroy {

    testCenters: any[];
    p: number = 1;
    subscription: Subscription;


    constructor(private route: ActivatedRoute,
        private router: Router,
        private adminPanelService: AdminPanelService
    ) {
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    ngOnInit(): void {
        this.subscription = this.adminPanelService.getAllTestCenter().valueChanges().subscribe(data => {
            this.filterData = this.testCenters = data;
        })


    }

    filterData: any[];
    searchFunction(term: string) {
        if (!term) {
            this.filterData = this.testCenters;
        } else {
            this.filterData = this.testCenters.filter(x =>
                x.name.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
                x.city.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
                x.phoneNumber.trim().toLowerCase().includes(term.trim().toLowerCase())
            );
        }
    }

}