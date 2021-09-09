import { Component, OnInit } from '@angular/core';
import { Art } from 'src/app/_models/art';
import { ArtService } from 'src/app/_services/art.service';

@Component({
  selector: 'app-art-showcase',
  templateUrl: './art-showcase.component.html',
  styleUrls: ['./art-showcase.component.css']
})
export class ArtShowcaseComponent implements OnInit {

  arts: Art[];

   constructor(private artService: ArtService) { 
     
  }

  ngOnInit(): void {
    this.loadArts();
  }

  loadArts() {
    this.artService.getArts().subscribe( response => {
      this.arts = response;
    })
  }
  
}
