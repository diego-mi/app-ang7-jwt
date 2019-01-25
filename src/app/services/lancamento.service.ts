import { Injectable } from '@angular/core';
import { Lancamento } from '../models/lancamento';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Lancamento[]>(`${environment.urlApi}/lancamentos`);
  }
}
