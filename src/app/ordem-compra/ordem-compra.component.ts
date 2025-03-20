import { OrdemCompraService } from './../ordem-compra.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pedido } from '../shared/pedido.model';
import { OrdemCompraSucessoComponent } from "../ordem-compra-sucesso/ordem-compra-sucesso.component";

@Component({
  selector: 'app-ordem-compra',
  imports: [CommonModule, RouterModule, OrdemCompraSucessoComponent],
  templateUrl: './ordem-compra.component.html',
  styleUrl: './ordem-compra.component.scss',
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit{

  public IdpedidoCompra?: number

  //Pedido
  public pedido: Pedido = new Pedido('', '', '', '')

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  //controles de validação dos campos
  public enderecoValido?: boolean
  public numeroValido?: boolean
  public complementoValido?: boolean
  public formaPagamentoValido?: boolean

  //estados primitivos dos campos(pristine)
  public enderecoEstado: boolean = true
  public numeroEstado: boolean = true
  public complementoEstado: boolean = true
  public formaPagamentoEstado: boolean = true

  //controlar botao confirmar compra
  public formEstado: boolean = true

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    //this.ordemCompraService.efetivarCompra()
  }

  public atualizaEndereco(endereco: string) {
    this.endereco = endereco
    // console.log(this.endereco)

    this.enderecoEstado = false

    //se a string for maior que 3
    if(this.endereco.length > 3){
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }
    this.habilitaForm()
  }

  public atualizaNumero(numero: string) {
    this.numero = numero
    // console.log(this.numero)

    this.numeroEstado = false

    if(this.numero.length > 0){
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }
    this.habilitaForm()
  }

  public atualizaComplemento(complemento: string) {
    this.complemento = complemento
    //console.log(this.complemento)

    this.complementoEstado = false

    if(this.complemento.length > 0){
      this.complementoValido = true
    }
    this.habilitaForm()
  }

  public atualizaFormaPagamento(formaPagamento: string) {
    this.formaPagamento = formaPagamento
    //console.log(this.formaPagamento)

    this.formaPagamentoEstado = false

    if(this.formaPagamento.length > 0){
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false
    }
    this.habilitaForm()
  }

  public habilitaForm() {
    if (this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true) {
      this.formEstado = false
    } else {
      this.formEstado = true
    }
  }

  public confirmarCompra() {
    this.pedido.endereco = this.endereco
    this.pedido.numero = this.numero
    this.pedido.complemento = this.complemento
    this.pedido.formaPagamento = this.formaPagamento

    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe((IdpedidoCompra: number) => {
        this.IdpedidoCompra = IdpedidoCompra
      })
  }
}
