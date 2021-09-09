import { Component, OnInit } from '@angular/core';
import { Admin } from './_models/admin';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Madamus Tattoos';
  
  constructor(private accountService: AccountService){};

  ngOnInit(): void {
    this.setCurrentUser();
  }
  
  setCurrentUser(){
    const admin : Admin = JSON.parse(localStorage.getItem('admin'));
    this.accountService.setCurrentUser(admin);
  }
  
  
}
