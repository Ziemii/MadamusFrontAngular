import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/_services/project.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService,  private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe( response => {
      this.projects = response;
    })
  }

  deleteThisFromDB(project: Project){
    this.projectService.deleteProject(project._id).subscribe( response => {
      this.toastr.warning('Projekt usunięty', project.title, {positionClass : 'toast-bottom-right'} );
      this.loadProjects();  
    })
  }

  goToEditPage(project: Project){
    
  }
  
  goToprojectAddForm(){
    //implement
  }

}
