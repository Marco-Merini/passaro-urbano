import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oferta',
  imports: [CommonModule, RouterModule],
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {
  
  // private tempoObservableSubscription: Subscription
  // private meuObservableTestSubscription: Subscription

  public ofertas: Oferta[] = []

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then(( oferta: Oferta[] ) => {
        this.ofertas = oferta
      })
      
      //Observable
      // // this.route.params.subscribe(
      // //   (parametro: any) => { console.log(parametro) }),
      // //   (erro: any) => console.log(erro),
      // //   () => console.log('processamento foi classificado como concluido!')
      //--------------------------------------------------------------------------//
      // var tempoObservableSubscription = interval(5000)
      // tempoObservableSubscription.subscribe((intervalo: number) => {
      //     console.log(intervalo)
      // })

      // //observable (observavel)
      // var meuObservableTestSubscription = new Observable((observer: Observer<number>) => {
      //   //observer.next('Primeiro evento da stream')
      //   //observer.next('Segundo evento da stream')
      //   observer.next(1)
      //   observer.next(2)
      //   //observer.error('algum erro foi encontrado na stream de eventos')
      //   observer.complete()
      //   observer.next(3)
      // })

      // //observable (observador)
      // meuObservableTestSubscription.subscribe(
      //   (resultado: number) => console.log(resultado + 10),
      //   (erro: string) => console.log(erro),
      //   () => console.log('Stream de eventos foi finalizada')
      // )
      //
  }
}
