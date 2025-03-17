import { HttpClient } from '@angular/common/http';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()

export class OfertasService {

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        //efetuar uma requisição http
        //retornar um promisse Oferta[]
        return lastValueFrom(
            this.http.get<Oferta[]>('http://localhost:3000/ofertas'))
    }
}
