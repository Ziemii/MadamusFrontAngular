import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Art } from '../_models/art';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  baseUrl = environment.apiUrl;
  arts: Art[] = [];


  constructor(private http: HttpClient) { }

  getArts() {
    return this.http.get<Art[]>(this.baseUrl + '/Arts');
  }

  getArt(id: string){
    return this.http.get<Art>(this.baseUrl + '/Arts/' + id);
  }

  deleteArt(id: number) {
    console.log(id);
    return this.http.delete(this.baseUrl + '/Arts/' + id);
  }

  getImage(img: string){
    this.http.get(this.baseUrl + '/images/arts/' + img);
  }

  editArt(id:number, art: any) {
    return this.http.put(this.baseUrl + "/Arts/edit/" + id, art).pipe(
      map((art : Art) => {
        
        return art;
      }
      )
    )
  }

  createNewArt(art: any){
    return this.http.post(this.baseUrl + "/Arts/", art).pipe(
      map((art : Art) => {
        
        return art;
      }
      )
    )
  }
}
