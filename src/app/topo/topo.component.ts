import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { debounceTime, Observable, Subject, Subscription, switchMap, of, distinct, distinctUntilChanged, catchError } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topo',
  imports: [CommonModule, RouterModule],
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.scss',
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>
  public ofertas2: Oferta[] = []
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorno Oferta[]
      .pipe(
        debounceTime(1000), //executa a ação do switchcmap map após 1 segundo
        distinctUntilChanged(), //para fazer pesquisas distintas
        switchMap((termo: string) => {
          console.log('requisição http para api:')
          if(termo.trim() === '') {
            //retornar um observable de array de ofertas vazio
            return of<Oferta[]>([])
          }
          return this.ofertaService.pesquisaOfertas(termo)
        })
      )

    this.ofertas.subscribe((ofertas: Oferta[]) => {
      console.log(ofertas)
      this.ofertas2 = ofertas
    })
  }
  

  public pesquisa(termoDaPesquisa: string): void {
    console.log('keyup caracter: ', termoDaPesquisa)
    this.subjectPesquisa.next(termoDaPesquisa)
  }

  public limpaPesquisa() {
    this.subjectPesquisa.next('')
  }
}
