import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AdminPanelService } from "../service/admin.panel.service";

@Component({
  selector: 'home-page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  newsPortal: any[];
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
    this.subscription = this.adminPanelService.getAllNewsPortal().valueChanges().subscribe(data => {
      this.filterData = this.newsPortal = data;
    })
  }

  vaccinationCenter() {
    this.router.navigate(['/vaccination-center']);
  }
  testCenter() {
    this.router.navigate(['/test-center']);
  }
  volunteerList() {
    this.router.navigate(['/volunteer-list']);
  }
  login() {
    this.router.navigate(['/login']);
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