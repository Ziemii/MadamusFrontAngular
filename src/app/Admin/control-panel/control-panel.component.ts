import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor(public accountService : AccountService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  logout(){

    this.accountService.logout();
    if(!!this.accountService.currentUser$){
      this.router.navigateByUrl('/');
      this.toastr.success('Żegnaj Królowo!', 'Wylogowano', {positionClass : 'toast-bottom-right'} );
    }  
      
    
  }

}
