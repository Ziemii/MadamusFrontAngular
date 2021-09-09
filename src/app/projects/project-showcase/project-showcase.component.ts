import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css']
})
export class ProjectShowcaseComponent implements OnInit {

  projects: Project[];

   constructor(private projectService: ProjectService,) { 
     
  }
  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe( response => {
      this.projects = response;
    })
  }
  
}
