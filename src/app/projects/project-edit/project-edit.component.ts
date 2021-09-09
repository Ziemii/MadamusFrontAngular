import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/_services/project.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
    
    project: Project;
    validationErrors: string[] = [];
    imageSrc: string;

    constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private projectService: ProjectService) {
    
     }
  
  
  ngOnInit(): void {
    this.loadProject();
  }

  loadProject(){
    this.projectService.getProject(this.activatedRoute.snapshot.paramMap.get('_id')).subscribe(project => {
      this.project = project;
    });
  }

 
  
    get f() {
      return this.myForm.controls;
    }
  
  
   myForm: FormGroup = this.fb.group({

      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required])
  
    });
  
    onFileChange(event, field) {
      const reader = new FileReader();
  
      if (event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
  
        reader.onload = () => {
  
          this.imageSrc = reader.result as string;
  
          this.myForm.patchValue({
            [field]: file
          });
        };
      }
    }
  
  
  
    update() {
  
      this.projectService.editProject(this.project._id, {
        title: this.myForm.get('title').value,
        description: this.myForm.get('description').value,
        price: this.myForm.get('price').value,
      
      }).subscribe((response: Project) => {
            this.router.navigateByUrl('/projects/' + this.project._id);
          }, error => {
            this.validationErrors = error
          });
  
    
  
  }

 
}
