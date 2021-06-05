import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminPanelService } from "../../service/admin.panel.service";
import { NewsPortalInfo } from "../../models/news.portal.model";

@Component({
    selector: 'news-portal-panel',
    templateUrl: './news.portal.form.component.html',
    styleUrls: ['./news.portal.form.component.css']
})
export class NewsPortalFormComponent implements OnInit {
    newsPortalForm: FormGroup;
    submitted = false;
    newsPortalInfo: NewsPortalInfo = new NewsPortalInfo();


    constructor(private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private adminPanelService: AdminPanelService
    ) {

    }
    ngOnInit(): void {
        this.prepareNewsPortalForm(null);
    }


    prepareNewsPortalForm(newsPortalInfoData: NewsPortalInfo) {
        newsPortalInfoData = newsPortalInfoData ? newsPortalInfoData : new NewsPortalInfo();
        this.newsPortalForm = this.formBuilder.group({
            title: [newsPortalInfoData.title, [Validators.required]],
            category: [newsPortalInfoData.category, [Validators.required]],
            imageUrl: [newsPortalInfoData.imageUrl, [Validators.required]],
            description: [newsPortalInfoData.description, [Validators.required]],
            website: [newsPortalInfoData.website, [Validators.required]]
        });
    }

    get f() { return this.newsPortalForm.controls; }

    saveNewsPortalInfo() {
        this.submitted = true;
        if (this.newsPortalForm.invalid) {
            return;
        }
        this.newsPortalInfo = this.newsPortalForm.value;
        console.log(this.newsPortalInfo)
        this.adminPanelService.createNewsPortal(this.newsPortalInfo);
        this.myFunction();
        this.prepareNewsPortalForm(null);
        this.back();
    }

    myFunction() {
        alert("You are successfully inserted data.");
    }
    back() {
        this.router.navigate(['/login']);

    }
}