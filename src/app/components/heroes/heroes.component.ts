import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //inicializamos una arreglo vacio de heroes
  heroesdos: Heroe[] = [];

  constructor(private _heroesService: HeroesService,
              private router:Router
              ) {
    console.log("constructor");

  }

  ngOnInit() {

    //almacenamos en nuestro arreglo, el servicio que trae el arreglo de heroes
    this.heroesdos = this._heroesService.getHeroes();

    console.log(this.heroesdos);

  }

  verHeroe(idx:number) {
    this.router.navigate(['/heroe',idx]);



  }

}
