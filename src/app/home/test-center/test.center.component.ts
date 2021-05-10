import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'test-center',
    templateUrl: './test.center.component.html',
    styleUrls: ['./test.center.component.css']
})
export class TestCenterComponent {

    constructor(private route: ActivatedRoute,
        private router: Router
    ) {
    }

    create() {
        this.router.navigate(['/volunteer']);
    }

}