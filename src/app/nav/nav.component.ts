import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  messenger = faFacebookMessenger;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

}
