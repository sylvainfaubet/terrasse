import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'terrasse-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
    public project;
    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.data.subscribe(({ project }) => {
            this.project = project;
            this.project.area = { width: 15, height: 10 };
        });
    }

    validate(project) {
        console.log(project);
        this.router.navigate(['draw']);
    }
}
