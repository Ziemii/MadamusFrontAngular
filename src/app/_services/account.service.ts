import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../_models/admin';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<Admin>(1);
  public currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  //Inplement login
  login(model:any){
    return this.http.post(this.baseUrl + '/login', model).pipe(
      map((response : Admin) => {
        const admin = response;
        if(admin){
          this.setCurrentUser(admin);
        }
      })
    )
  }

  //Implement logout
  logout(){
    localStorage.removeItem('admin');
    this.currentUserSource.next(null);
  }

  setCurrentUser(admin : Admin){
    localStorage.setItem('admin', JSON.stringify(admin));
    this.currentUserSource.next(admin);
  }
}
