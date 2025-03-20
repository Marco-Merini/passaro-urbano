import { Pedido } from "./shared/pedido.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { URL_API } from "./api";

@Injectable()
export class OrdemCompraService {
    constructor(private http: HttpClient) { }

    public efetivarCompra(pedido: Pedido): Observable<number> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http.post(`${URL_API}/pedidos`, JSON.stringify(pedido), { headers })
            .pipe(
                map((resposta: any) => resposta.id)
            );
    }
}
