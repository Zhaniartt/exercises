
import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movies } from '../models/movies'

const apiKey = 'ff2af3a8059caa4b2cea87c54a8f47f4'
@Injectable()
export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/';
    popular: string = 'discover/movie?sort_by=popularity.desc';
    theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
    kids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    drama: string = 'discover/movie?with_genres=18&primary_release_year=2014'
    movie: string ='movie/'
    authentication: string = '&api_key='
    movieAuth : string = '?api_key='
    constructor(private http: HttpClient){

    }

    getPopular() : Observable<Movies>{
        return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`)
    }
    getTheaters() : Observable<Movies>{
        return this.http.get<Movies>(`${this.path}${this.theaters}${this.authentication}${apiKey}`)
    }
    getKids() : Observable<Movies>{
        return this.http.get<Movies>(`${this.path}${this.kids}${this.authentication}${apiKey}`)
    }
    getDrama() : Observable<Movies>{
        return this.http.get<Movies>(`${this.path}${this.drama}${this.authentication}${apiKey}`)
    }
    getMovie(id) {
        return this.http.get(`${this.path}${this.movie}` + id + `${this.movieAuth}${apiKey}`)
    }
}