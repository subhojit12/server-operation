import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addCustomer(){
  	this.customerService.addRemoteCustomer(this.customer).subscribe(()=>{this.router.navigate(['/list-customer']);});
  }

}
