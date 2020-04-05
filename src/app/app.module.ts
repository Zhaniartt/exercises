import { AppBootstrapModule } from './app-bootstrap.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { NewComponentComponent } from './new-component/new-component.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NewComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
