import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Art } from 'src/app/_models/art';
import { ArtService } from 'src/app/_services/art.service';


@Component({
  selector: 'app-art-edit',
  templateUrl: './art-edit.component.html',
  styleUrls: ['./art-edit.component.css']
})
export class ArtEditComponent implements OnInit {

  art: Art;
  validationErrors: string[] = [];
  imageSrc: string;

  constructor( private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private artService: ArtService) {}

  ngOnInit(): void {
    this.loadArt();
  }

  loadArt() {
    this.artService.getArt(this.activatedRoute.snapshot.paramMap.get('_id')).subscribe(art => {
      this.art = art;
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

    this.artService.editArt(this.art._id, {
    title: this.myForm.get('title').value,
    description: this.myForm.get('description').value,
    price: this.myForm.get('price').value,
    }).subscribe((response: Art) => {
      this.router.navigateByUrl('/arts/' + this.art._id);
    }, error => {
      this.validationErrors = error
    });
  }

}
