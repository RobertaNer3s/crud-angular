import { Component, OnInit } from '@angular/core';
import { IProcessos } from 'src/app/models/processos';
import { ProcessosService } from 'src/app/services/processos.service';

@Component({
  selector: 'app-listar-processos',
  templateUrl: './listar-processos.component.html',
  styleUrls: ['./listar-processos.component.scss']
})
export class ListarProcessosComponent implements OnInit {
  processos: IProcessos[] = [];

  constructor(private processoService: ProcessosService) { }

  ngOnInit(): void {
    this.listarTodosProcessos()
  }

  listarTodosProcessos(){
    this.processoService.listarProcessos().subscribe((response) => {
      console.log(response)
      this.processos = response;
    }, error => {})
  }

}
