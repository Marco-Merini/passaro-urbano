import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ordem-compra-sucesso',
  imports: [],
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrl: './ordem-compra-sucesso.component.scss'
})
export class OrdemCompraSucessoComponent implements OnInit {

  @Input() public IdpedidoCompra?: number

  constructor() { }

  ngOnInit() {
    
  }

}
