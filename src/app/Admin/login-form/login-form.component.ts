import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../_services/account.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public accountService : AccountService, private router : Router, private toastr : ToastrService) { }

  model : any = {};

  ngOnInit(): void {
  }


  //Implement
  login(){

    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/control-panel');
      this.toastr.success('Witaj Królowo!', 'Udane logowanie', {positionClass : 'toast-bottom-right'} );
    });
  }

}
