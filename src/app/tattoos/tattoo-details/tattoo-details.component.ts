import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tattoo } from 'src/app/_models/tattoo';
import { TattooService } from 'src/app/_services/tattoo.service';

@Component({
  selector: 'app-tattoo-details',
  templateUrl: './tattoo-details.component.html',
  styleUrls: ['./tattoo-details.component.css']
})
export class TattooDetailsComponent implements OnInit {

  tattoo: Tattoo;

  constructor(private tattooService: TattooService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadTattoo();
  }

  loadTattoo(){
    this.tattooService.getTattoo(this.router.snapshot.paramMap.get('_id')).subscribe(tattoo => {
      this.tattoo = tattoo;
    });
  }

  loadImage(title: string){
    this.tattooService.getImage(title);
  }

}
