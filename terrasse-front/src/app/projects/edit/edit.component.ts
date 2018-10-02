import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../shared/model/project';

@Component({
    selector: 'terrasse-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
    project: Project;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.data.subscribe(({ project }) => {
            this.project = project;
        });
    }

    ngOnInit() {}

    validate(project) {
        console.log(project);
        this.router.navigate(['projects', project.id, 'draw']);
    }
}
