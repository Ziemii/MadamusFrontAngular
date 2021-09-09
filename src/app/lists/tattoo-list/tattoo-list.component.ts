import { Component, OnInit } from '@angular/core';
import { Tattoo } from 'src/app/_models/tattoo';
import { TattooService } from 'src/app/_services/tattoo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tattoo-list',
  templateUrl: './tattoo-list.component.html',
  styleUrls: ['./tattoo-list.component.css']
})
export class TattooListComponent implements OnInit {

  tattoos: Tattoo[];

  constructor(private tattooService: TattooService,  private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.loadTattoos();
  }

  loadTattoos() {
    this.tattooService.getTattoos().subscribe( response => {
      this.tattoos = response;
    })
  }

  deleteThisFromDB(tattoo: Tattoo){
    this.tattooService.deleteTattoo(tattoo._id).subscribe( response => {
      this.toastr.warning('Projekt usunięty', tattoo.title, {positionClass : 'toast-bottom-right'} );
      this.loadTattoos();  
    })
  }

  goToEditPage(tattoo: Tattoo){
    
  }
  
  goTotattooAddForm(){
    //implement
  }

}
