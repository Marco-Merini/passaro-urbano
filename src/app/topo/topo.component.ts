import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { debounceTime, Observable, Subject, Subscription, switchMap, of, distinct, distinctUntilChanged, catchError } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topo',
  imports: [CommonModule],
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.scss',
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() { }

  public pesquisa(termoDaPesquisa: string): void {
    console.log('keyup caracter: ', termoDaPesquisa)


    this.ofertas = this.ofertaService.pesquisaOfertas(termoDaPesquisa)
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => {
      console.log(ofertas.filter(oferta => oferta.descricao_oferta.toLowerCase().includes(termoDaPesquisa.toLowerCase()))) },
      (erro: any) => console.log('Erro status: ', erro.status),
      () => console.log('Fluxo de eventos completo')
    )
  }
}
