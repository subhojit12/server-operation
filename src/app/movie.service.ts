import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  private movieUrl = 'http://localhost:3000/api/movies';
  getRemoteMovies(): Observable<[]> {
    return this.http.get<[]>(this.movieUrl);
  }
  deleteRemoteMovie(id){
  	return this.http.delete(this.movieUrl+"/"+id); 		
  }
}
