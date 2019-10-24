import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {

  heroedos: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesServices:HeroesService
  ) {

    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id']);
      this.heroedos = this._heroesServices.getHeroe(params['id']);
      console.log(this.heroedos);

    })

}
}

