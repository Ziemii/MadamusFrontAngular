import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tattoo } from '../_models/tattoo';

@Injectable({
  providedIn: 'root'
})
export class TattooService {

  baseUrl = environment.apiUrl;
  tattoos: Tattoo[] = [];


  constructor(private http: HttpClient) { }

  getTattoos() {
    return this.http.get<Tattoo[]>(this.baseUrl + '/tattoos');
  }

  getTattoo(id: string){
    return this.http.get<Tattoo>(this.baseUrl + '/tattoos/' + id);
  }

  deleteTattoo(id: number) {
    console.log(id);
    return this.http.delete(this.baseUrl + '/tattoos/' + id);
  }

  getImage(img: string){
    this.http.get(this.baseUrl + '/images/tattoos/' + img);
  }

  editTattoo(id:number, tattoo: any) {
    return this.http.put(this.baseUrl + "/tattoos/edit/" + id, tattoo).pipe(
      map((tattoo : Tattoo) => {
        
        return tattoo;
      }
      )
    )
  }

  createNewtattoo(tattoo: any){
    return this.http.post(this.baseUrl + "/tattoos/", tattoo).pipe(
      map((tattoo : Tattoo) => {
        
        return tattoo;
      }
      )
    )
  }
}
