import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Oferta } from './../shared/oferta.model';
import { OfertasService } from '../ofertas.service'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-diversao',
  imports: [CommonModule, RouterModule],
  templateUrl: './diversao.component.html',
  styleUrl: './diversao.component.scss',
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {
  
  public ofertas: Oferta[] = []

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategoria('diversao')
      .then(( ofertas: Oferta[] ) => {
        this.ofertas = ofertas
      })
  }

}
