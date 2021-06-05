import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AdminPanelService } from "../../service/admin.panel.service";

@Component({
    selector: 'news-portal-list',
    templateUrl: './news.portal.list.component.html',
    styleUrls: ['./news.portal.list.component.css']
})
export class NewsPortalListComponent implements OnInit {

    newsPortal: any[];
    p: number = 1;
    subscription: Subscription;


    constructor(
        private adminPanelService: AdminPanelService
    ) {
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    ngOnInit(): void {
        this.subscription = this.adminPanelService.getAllNewsPortal().valueChanges().subscribe(data => {
            this.filterData = this.newsPortal = data;
        })


    }

    filterData: any[];
    searchFunction(term: string) {
        if (!term) {
            this.filterData = this.newsPortal;
        } else {
            this.filterData = this.newsPortal.filter(x =>
                x.title.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
                x.category.trim().toLowerCase().includes(term.trim().toLowerCase())
            );
        }
    }

}