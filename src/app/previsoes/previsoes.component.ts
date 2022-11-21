import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PrevisoesService } from '../previsoes.service';

@Component({
  selector: 'app-previsoes',
  templateUrl: './previsoes.component.html',
  styleUrls: ['./previsoes.component.css']
})
export class PrevisoesComponent implements OnInit{
  cidade: string;
  previsoes: any;
  historico: any;
  url_icon: string;
  data : string = Date()
  // now : Date = new Date();
  // data : string = String(this.now.toLocaleString);

  ngOnInit(): void{
    this.previsoesService
    .registrarComponenteComoInteressado().subscribe((previsoes: any) => {
    this.previsoes = previsoes.list
    })

    this.previsoesService
    .registrarComponenteComoInteressado().subscribe((historico: any) => {
    this.historico = historico.items
    })
  }

  constructor(private previsoesService: PrevisoesService){

  }

  pesquisar() : void {
    this.previsoesService.obterPrevisoes(this.cidade, this.data)
  }

  armazenarNoHistorico(){
    this.previsoesService.armazenarNoHistorico(this.cidade, null, "link de teste")
  }

  consultarHistorico() : void{
    this.previsoesService.consultarHistorico()
  }
}
