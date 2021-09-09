import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = environment.apiUrl;
  projects: Project[] = [];


  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<Project[]>(this.baseUrl + '/projects');
  }

  getProject(id: string){
    return this.http.get<Project>(this.baseUrl + '/projects/' + id);
  }

  deleteProject(id: number) {
    console.log(id);
    return this.http.delete(this.baseUrl + '/projects/' + id);
  }

  getImage(img: string){
    this.http.get(this.baseUrl + '/images/projects/' + img);
  }

  editProject(id:number, project: any) {
    return this.http.put(this.baseUrl + "/projects/edit/" + id, project).pipe(
      map((project : Project) => {
        
        return project;
      }
      )
    )
  }

  createNewProject(project: any){
    return this.http.post(this.baseUrl + "/projects/", project).pipe(
      map((project : Project) => {
        
        return project;
      }
      )
    )
  }
}
