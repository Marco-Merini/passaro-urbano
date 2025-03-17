import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[] = []

  constructor(private OfertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.OfertasService.getOfertas()
    console.log(this.ofertas)
  }
}
