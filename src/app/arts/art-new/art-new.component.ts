import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Art } from 'src/app/_models/art';
import { ArtService } from 'src/app/_services/art.service';

@Component({
  selector: 'app-art-new',
  templateUrl: './art-new.component.html',
  styleUrls: ['./art-new.component.css']
})
export class ArtNewComponent 
{

  validationErrors: string[] = [];

  imageSrc: string;
  myForm: FormGroup = this.fb.group({

    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required])

  });



  constructor(private toastr: ToastrService, private fb: FormBuilder, private router: Router, private artService: ArtService) { }

 

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
      formData.append('price', this.myForm.get('price').value);
      formData.append('img', this.myForm.get('img').value);
      console.log(formData.get('img'));
    this.artService.createNewArt(formData).subscribe((response: Art) => {
          this.router.navigateByUrl('/arts/' + response._id);
        }, error => {
          this.validationErrors = error
        });

  }

}
