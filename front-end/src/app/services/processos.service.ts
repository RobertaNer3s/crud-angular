import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProcessos } from '../models/processos';

@Injectable({
  providedIn: 'root'
})
export class ProcessosService {

  constructor(private httpClient: HttpClient) { }

  listarProcessos() {
    return this.httpClient.get<IProcessos[]>(`${environment.api}/processos`)
  }
}
