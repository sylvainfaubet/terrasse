import { Component, OnInit, Input } from '@angular/core';
import { DownloadService } from 'src/app/download/download.service';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { Project } from '../project';

@Component({
    selector: 'terrasse-saving',
    templateUrl: './saving.component.html',
    styleUrls: ['./saving.component.scss'],
})
export class SavingComponent implements OnInit {
    @Input()
    project: Project;

    constructor(
        private readonly downloadService: DownloadService,
        private readonly projectService: ProjectService,
        private readonly router: Router,
    ) {}

    ngOnInit() {}
    saveProject() {
        this.downloadService.saveAsJson(this.project);
    }

    loadProject() {
        this.downloadService.getFromJson().then(data => {
            const project = this.projectService.setProjectFromData(data);
            console.log('loadProject', data, project);
            this.router.navigate(['/project', project.id]);
        });
    }
}