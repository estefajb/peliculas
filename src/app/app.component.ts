import { Component, OnInit } from '@angular/core';
import { Pelicula } from './models/pelicula.model';
import { SPeliculasService } from './services/s-peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  peliculas:Pelicula[] = new Array<Pelicula>();
  title = 'peliculas';
  constructor(private servicioPeliculas:SPeliculasService) {
  }
  ngOnInit(): void {
    this.servicioPeliculas.getPeliculas().subscribe(
      peliculas =>{
        this.peliculas = peliculas;
      }
    )
  }

  
}
