import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;

  constructor(private projectService: ProjectService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadproject();
  }

  loadproject(){
    this.projectService.getProject(this.router.snapshot.paramMap.get('_id')).subscribe(project => {
      this.project = project;
    });
  }

  loadImage(title: string){
    this.projectService.getImage(title);
  }

}
