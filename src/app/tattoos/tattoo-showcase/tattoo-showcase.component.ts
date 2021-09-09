import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tattoo } from 'src/app/_models/tattoo';
import { TattooService } from 'src/app/_services/tattoo.service';

@Component({
  selector: 'app-tattoo-showcase',
  templateUrl: './tattoo-showcase.component.html',
  styleUrls: ['./tattoo-showcase.component.css']
})
export class TattooShowcaseComponent implements OnInit {

  tattoos: Tattoo[];

   constructor(private tattooService: TattooService,  private router : Router) { 
  }

  ngOnInit(): void {
    this.loadTattoos();
  }

  loadTattoos() {
    this.tattooService.getTattoos().subscribe( response => {
      this.tattoos = response;
    })
  }
  
}
