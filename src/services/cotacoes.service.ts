import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITipo } from 'src/models/tipo.model';
import { IAtivo } from 'src/models/ativo.model';
import { Observable, tap } from 'rxjs';
import { ICotacao } from 'src/models/cotacao.model';

@Injectable({
  providedIn: 'root'
})
export class CotacoesService {
  private readonly API = 'https://mapa-trading.herokuapp.com/';
  private readonly API2 = `http://localhost:3000/`;

  
  private tipos: ITipo[] = [
    {name:'ACAO', label: 'Ação'},
    {name:'CRYPTO', label: 'Crypto'},
    {name:'MOEDA', label: 'Moeda'}
  ];


  constructor(
    private http: HttpClient
  ) { }

  getAtivos(): Observable<IAtivo[]> {
    return this.http.get<IAtivo[]>(this.API + 'ativos-financeiros')
    .pipe(
      tap(console.log)
    );
  }

  getTipos():ITipo[]{
    return this.tipos;
  }

  getCotacao(sigla:string, dt1:string, dt2:string): Observable<ICotacao>{
    return this.http.get<ICotacao>(this.API+`cotacoes?siglas=${sigla}&startDate=${dt1}&endDate=${dt2}`)
    .pipe(
      tap(console.log)
    );
  }

  getCotacoes(sigla:string, dt1:string, dt2:string): Observable<ICotacao[]>{
    return this.http.get<ICotacao[]>(this.API+`cotacoes?siglas=${sigla}&startDate=${dt1}&endDate=${dt2}`)
    .pipe(
      tap(console.log)
    );
  }


}

