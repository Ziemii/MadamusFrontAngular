import { Component, OnInit } from '@angular/core';
import { Art } from 'src/app/_models/art';
import { ArtService } from 'src/app/_services/art.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {

  arts: Art[];

  constructor(private artService: ArtService,  private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.loadArts();
  }

  loadArts() {
    this.artService.getArts().subscribe( response => {
      
      this.arts = response;
    })
  }

  deleteThisFromDB(art: Art){
    this.artService.deleteArt(art._id).subscribe( response => {
      this.toastr.warning('Art usunięty', art.title, {positionClass : 'toast-bottom-right'} );
      this.loadArts();  
    })
  }

  goToEditPage(art: Art){
    
  }
  
  goToArtAddForm(){
    //implement
  }

}
