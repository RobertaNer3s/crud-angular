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

  cadastrarProcesso(dados: IProcessos) {
    return this.httpClient.post<IProcessos>(`${environment.api}/processos`, dados)
  }

  filtrarProcesso(numeroDoProcesso: string){
    return this.httpClient.get<IProcessos[]>(`${environment.api}/processos`, { params: { numero: numeroDoProcesso }})
  }

  buscarUmProcesso(id: string){
    return this.httpClient.get<IProcessos>(`${environment.api}/processos/${id}`)
  }

  atualizaProcesso(dados: IProcessos){
    return this.httpClient.put<IProcessos>(`${environment.api}/processos/${dados.id}`, dados)
  }

  deletarProcesso(id: number){
    return this.httpClient.delete(`${environment.api}/processos/${id}`)
  }
}
