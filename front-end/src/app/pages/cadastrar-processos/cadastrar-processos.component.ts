import { Component, OnInit } from '@angular/core';
import { IProcessos } from 'src/app/models/processos';
import { ProcessosService } from 'src/app/services/processos.service';

@Component({
  selector: 'app-cadastrar-processos',
  templateUrl: './cadastrar-processos.component.html',
  styleUrls: ['./cadastrar-processos.component.scss']
})
export class CadastrarProcessosComponent implements OnInit {
  numero: string = '';
  reu: string = '';

  formulario: IProcessos = {};

  constructor(private processosService: ProcessosService) { }

  ngOnInit(): void {
  }

  cadastrarProcesso() {
    this.processosService.cadastrarProcesso(this.formulario).subscribe(response => {
      alert('Dados cadastrados com sucesso!')
      alert(`Número: ${response.numero} - Réu: ${response?.reu}`)
    }, error => {
      alert('Erro ao cadastrar novo processo')
    })
  }

  verificaProcessoExistente() {
    let numeroDoProcesso = '';

    if (this.formulario.numero) {
      numeroDoProcesso = this.formulario.numero;
    }

    this.processosService.filtrarProcesso(numeroDoProcesso).subscribe(response => {

      if (response.length === 0) {
        this.cadastrarProcesso()
      } else {
        alert('Erro número do processo já existe!')
      }

    }, error => { })
  }

  enviarDados() {
    if (this.numero === '') {
      alert('Número do processo é inválido')
      return;
    }

    if (this.reu === '') {
      this.formulario = {
        numero: this.numero,
      }
    } else {
      this.formulario = {
        numero: this.numero,
        reu: this.reu
      }
    }

    this.verificaProcessoExistente()
  }

}
