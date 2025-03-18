import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-restaurantes',
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.scss',
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[] = []

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategoria('restaurante')
      .then(( ofertas: Oferta[] ) => {
        this.ofertas = ofertas
      })
  }
}
