import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Lancamento } from '../models/lancamento';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Lancamento[]>(`${environment.urlApi}/lancamentos`);
  }
}
