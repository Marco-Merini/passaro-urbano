import { HttpClient } from '@angular/common/http';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { URL_API } from './api';

@Injectable()

export class OfertasService {

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        //efetuar uma requisição http
        //retornar um promisse Oferta[]
        return lastValueFrom(
            this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`))
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return lastValueFrom(
            this.http.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`))
    }

    public getOfertaPorId(id: number): Promise<Oferta[]> {
        return lastValueFrom(
            this.http.get<Oferta[]>(`${URL_API}/ofertas?id=${id}`))
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return lastValueFrom(
            this.http.get<any[]>(`${URL_API}/como-usar?id=${id}`))
            .then(response => {
                const item = response.find(oferta => oferta.id === id);
                return item ? item.descricao : 'Descrição não encontrada';
            });
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return lastValueFrom(
            this.http.get<any[]>(`${URL_API}/onde-fica?id=${id}`))
            .then(response => {
                const item = response.find(oferta => oferta.id === id);
                return item ? item.descricao : 'Descrição não encontrada';
            });
    }
}
