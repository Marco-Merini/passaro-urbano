import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  imports: [],
  templateUrl: './onde-fica.component.html',
  styleUrl: './onde-fica.component.scss',
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ''

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent?.snapshot.params['id'])
    .then(( descricao: string ) => {
      this.ondeFica = descricao
    })
  }

}
