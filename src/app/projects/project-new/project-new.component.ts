import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent
// implements OnInit 
{

  validationErrors: string[] = [];

  imageSrc: string;
  myForm: FormGroup = this.fb.group({

    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required])

  });

  constructor(private fb: FormBuilder, private router: Router, private projectService: ProjectService, private http: HttpClient) { }

  get f() {
    return this.myForm.controls;
  }



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



  submit() {

    console.log(this.myForm.value);

    const formData = new FormData();
    formData.append('title', this.myForm.get('title').value);
    formData.append('description', this.myForm.get('description').value);
    formData.append('img', this.myForm.get('img').value);
    console.log(formData.get('img'));
    this.projectService.createNewProject(formData).subscribe((response: Project) => {
      this.router.navigateByUrl('/projects/' + response._id);
    }, error => {
      this.validationErrors = error
    });

  }

}
