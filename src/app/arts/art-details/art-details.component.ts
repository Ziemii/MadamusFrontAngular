import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Art } from 'src/app/_models/art';
import { ArtService } from 'src/app/_services/art.service';

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrls: ['./art-details.component.css']
})
export class ArtDetailsComponent implements OnInit {

  art: Art;

  constructor(private artService: ArtService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadArt();
  }

  loadArt(){
    this.artService.getArt(this.router.snapshot.paramMap.get('_id')).subscribe(art => {
      this.art = art;
    });
  }

  loadImage(title: string){
    this.artService.getImage(title);
  }

}
