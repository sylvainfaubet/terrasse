import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../projects/shared/project.service';

@Component({
    selector: 'terrasse-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor(private router: Router, private projectService: ProjectService) { }

    ngOnInit() {
    }

    createProject() {
        console.log('createProject()');
        const project = this.projectService.createProject();
        this.router.navigate(['projects', project.id]);
    }

}
