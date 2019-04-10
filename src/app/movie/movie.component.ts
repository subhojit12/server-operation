import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  list=[];
  constructor(private movieService:MovieService) { }
  
  ngOnInit() {
    this.list=this.movieService.getRemoteMovies();
    this.movieService.getRemoteMovies().subscribe((result) => {this.list = result.results;console.log(this.list)});
  	 
  }
  deleteMovie(id){
    this.movieService.deleteRemoteMovie(id).subscribe((e) => {
      this.movieService.getRemoteMovies().subscribe((result) => {this.list = result.results;});
    });
  }
  

}
