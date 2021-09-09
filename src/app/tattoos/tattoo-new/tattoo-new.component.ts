import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tattoo } from 'src/app/_models/tattoo';
import { TattooService } from 'src/app/_services/tattoo.service';

@Component({
  selector: 'app-tattoo-new',
  templateUrl: './tattoo-new.component.html',
  styleUrls: ['./tattoo-new.component.css']
})
export class TattooNewComponent 
{

  validationErrors: string[] = [];
  imageSrc: string;
  myForm: FormGroup = this.fb.group({

    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required])

  });



  constructor(private fb: FormBuilder, private router: Router, private tattooService: TattooService, private http: HttpClient) { }

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


    const formData = new FormData();
      formData.append('title', this.myForm.get('title').value);
      formData.append('description', this.myForm.get('description').value);
      formData.append('img', this.myForm.get('img').value);
      console.log(formData.get('img'));
    this.tattooService.createNewtattoo(formData).subscribe((response: Tattoo) => {
          this.router.navigateByUrl('/tattoos/' + response._id);
        }, error => {
          this.validationErrors = error
        });

  }

}
