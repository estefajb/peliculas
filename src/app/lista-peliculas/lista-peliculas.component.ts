import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {
  @Input() pelicula:Pelicula = new Pelicula(0,"","",0,"");
  constructor() { }

  ngOnInit(): void {
  }

}
