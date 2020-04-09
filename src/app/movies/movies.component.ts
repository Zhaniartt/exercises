import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {Movies} from '../models/movies'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: any;
  theaters: any;
  kids: any;
  drama: any;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService
        .getPopular()
        .subscribe(data=> {
          this.popular = data
        })

    this.moviesService
        .getTheaters()
        .subscribe(data=>{
          this.theaters = data
        })    

       this.moviesService
           .getKids()
           .subscribe(data=> {
             this.kids = data
             console.log(this.kids);
             
           })
       this.moviesService
           .getDrama()
           .subscribe(data=>{
             this.drama = data

           })    
  }
  
}
