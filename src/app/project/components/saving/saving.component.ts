import { Component, Input } from '@angular/core';
import { DownloadService } from '@shared/services/download.service';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';
import { Project } from '../../models/project';

@Component({
  selector: 'terrasse-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.scss'],
})
export class SavingComponent {
  @Input()
  project: Project;

  constructor(
    private readonly downloadService: DownloadService,
    private readonly projectService: ProjectService,
    private readonly router: Router,
  ) { }

  saveProject(): void {
    this.downloadService.saveAsJson(this.project);
  }

  loadProject(): void {
    this.downloadService.getFromJson().then(data => {
      const project = this.projectService.setProjectFromData(data);
      console.log('loadProject', data, project);
      this.router.navigate(['/project', project.id]);
    });
  }
}
