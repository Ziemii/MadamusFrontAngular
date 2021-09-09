import { Component, OnInit } from '@angular/core';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  messenger = faFacebookMessenger;

  constructor() { }

  ngOnInit(): void {
  }

}
