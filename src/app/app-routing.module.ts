import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'movie',component:MovieComponent },
  { path:'add-movie',component:AddMovieComponent },
  { path:'edit-movie',component:EditMovieComponent },
  { path:'login',component:LoginComponent },
  { path:'',pathMatch:'full',redirectTo:'login'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
