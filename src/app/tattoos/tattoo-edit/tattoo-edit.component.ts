import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Tattoo } from 'src/app/_models/tattoo';
import { TattooService } from 'src/app/_services/tattoo.service';


@Component({
  selector: 'app-tattoo-edit',
  templateUrl: './tattoo-edit.component.html',
  styleUrls: ['./tattoo-edit.component.css']
})
export class TattooEditComponent implements OnInit {
    
    tattoo: Tattoo;
    validationErrors: string[] = [];
    imageSrc: string;

    constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private tattooService: TattooService) {
     }
  
  
  ngOnInit(): void {
    this.loadTattoo();
  }

  loadTattoo(){
    this.tattooService.getTattoo(this.activatedRoute.snapshot.paramMap.get('_id')).subscribe(tattoo => {
      this.tattoo = tattoo;
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
  
      this.tattooService.editTattoo(this.tattoo._id, {
        title: this.myForm.get('title').value,
        description: this.myForm.get('description').value,
      }).subscribe((response: Tattoo) => {
            this.router.navigateByUrl('/tattoos/' + this.tattoo._id);
          }, error => {
            this.validationErrors = error
          });
  
    
  
  }

 
}
