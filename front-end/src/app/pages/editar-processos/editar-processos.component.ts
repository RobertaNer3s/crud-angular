import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProcessos } from 'src/app/models/processos';
import { ProcessosService } from 'src/app/services/processos.service';

@Component({
  selector: 'app-editar-processos',
  templateUrl: './editar-processos.component.html',
  styleUrls: ['./editar-processos.component.scss']
})
export class EditarProcessosComponent implements OnInit {
  id: string = '';
  numero: string = '';
  reu: string = '';

  formulario: IProcessos = {};

  constructor(
    private processosService: ProcessosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.buscarProcesso(this.id)
  }

  buscarProcesso(id: string) {
    this.processosService.buscarUmProcesso(id).subscribe(response => {
      if (response.id) {
        this.numero = response?.numero || '';
        this.reu = response?.reu || '';
        this.formulario = {
          id: response.id
        }
      } else {
        this.router.navigate(['/listarprocessos'])
      }
    }, error => {
      alert('Erro ao buscar um processo')
      this.router.navigate(['/listarprocessos'])
    })
  }

  atualizarProcesso() {
    this.processosService.atualizaProcesso(this.formulario).subscribe(response => {
      alert('Dados atualizados com sucesso!')
      alert(`Número: ${response.numero} - Réu: ${response?.reu}`)
    }, error => {
      alert('Erro ao atualizar o processo')
    })
  }

  enviarDados() {
    if (this.numero === '') {
      alert('Número do processo é inválido')
      return;
    }

    if (this.reu === '') {
      this.formulario = {
        id: Number(this.id),
        numero: this.numero,
      }
    } else {
      this.formulario = {
        id: Number(this.id),
        numero: this.numero,
        reu: this.reu
      }
    }

    this.atualizarProcesso()
  }

}
