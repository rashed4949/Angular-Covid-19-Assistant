import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AdminPanelService } from "src/app/service/admin.panel.service";

@Component({
    selector: 'vaccination-center',
    templateUrl: './vaccination.center.component.html',
    styleUrls: ['./vaccination.center.component.css']
})
export class VaccinationCenterComponent implements OnInit, OnDestroy {

    vaccinationCenters: any[];
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
        this.subscription = this.adminPanelService.getAllVaccinationCenter().valueChanges().subscribe(data => {
            this.filterData = this.vaccinationCenters = data;
        })


    }

    filterData: any[];
    searchFunction(term: string) {
        if (!term) {
            this.filterData = this.vaccinationCenters;
        } else {
            this.filterData = this.vaccinationCenters.filter(x =>
                x.name.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
                x.city.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
                x.phoneNumber.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
                x.address.trim().toLowerCase().includes(term.trim().toLowerCase())
            );
        }
    }
}